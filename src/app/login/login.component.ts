import { DefaultAuthService } from './../services/default-auth.service';
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
    //console.log(this.username + " pass " + this.password)
    // console.log(this.isUserLoggedin())
    if (this.defaultAuthService.checkAuthentication(this.username, this.password)) {
      this.invalidLogin = false;
      sessionStorage.setItem("authenticatedUser", 'Admin');
      this.router.navigate(['/home/' + 'Admin'])
    } else {
      this.invalidLogin = true;
    }
    //console.log(this.isUserLoggedin())
  }


}

