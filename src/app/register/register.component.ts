import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userInput:reguser
  
  constructor() { }

  ngOnInit(): void {
    this.userInput = new reguser('','','','','')
  }

  doregister(){
    console.log(this.userInput.email)
  }

}



export class  reguser {
  constructor(public email:string ,public username:string, public password:string,public retypepassword:string,public region:string) {
    
  }
}