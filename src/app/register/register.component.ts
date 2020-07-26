import { DefaultAuthService } from './../services/default-auth.service';
import { RegisterService, reguser } from './../services/register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userInput: reguser;
  errorMsg = ''
  regsuccess = false
  regfailure = false
  constructor(private registerService: RegisterService, private defaultAuthService: DefaultAuthService) { }

  ngOnInit(): void {
    this.userInput = new reguser('', '', '', '', '')
  }

  doregister() {
    this.defaultAuthService.logoutUser();
    console.log(this.userInput.email + ' ' + this.userInput.username)
    this.registerService.performRegisterUser(this.userInput).subscribe(
      resp => { this.regsuccess = true, this.errorMsg = resp.toString() },
      err => { this.regfailure = false,this.errorMsg = err.toString() }
    );
  }
}