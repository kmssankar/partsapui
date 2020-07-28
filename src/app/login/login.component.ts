import { pipe } from 'rxjs';
import { DefaultAuthService, userDet } from './../services/default-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // we need to route to home after successful Login
  //Add dependecy Injection : Just pass as constructor Arguement
  constructor(private router: Router, private defaultAuthService: DefaultAuthService) { }
  username = '';
  password = '';
  invalidLogin: boolean = false;

  ngOnInit(): void {
  }


  performLogin() {
    this.defaultAuthService.logoutUser();
    this.defaultAuthService.executeGetuserdetaftAuth(this.username, this.password).subscribe(
      resp => 
        this.executesucccessfulAuth(resp,this.username, this.password),
      err => 
        this.executefailureauth(err,this.username, this.password)
    )
  }
  executesucccessfulAuth( response:userDet,username:string, password:string){
    
    console.log("successful resp")
    sessionStorage.setItem("authenticatedUser", username)
    sessionStorage.setItem("basicAuthstr", this.createbasicAuth(username, password))
    sessionStorage.setItem("userrole", response.authority)
    sessionStorage.setItem("userArea", response.userArea)  
    this.invalidLogin = false;
    this.router.navigate(['/home/' + username])
  }
  executefailureauth( response:userDet,username:string, password:string){
    
    this.invalidLogin= true;
  }
  createbasicAuth(username: string, password: string) {
    let baseAuth = 'Basic ' + window.btoa(username + ':' + password)
    return baseAuth
  }
}

