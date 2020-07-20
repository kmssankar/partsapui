import { Injectable } from '@angular/core';

//service will have @Injectable by default 
@Injectable({
  providedIn: 'root'
})
export class DefaultAuthService {

  constructor() { }

  checkAuthentication(username:string,password:string){
    //console.log(this.username + " pass " + this.password)
    if ((username === 'admin') && (password ==='test')){
      let userDetail = new userDet('admin','ADMIN',true);
      //console.log('before setting sesion ' ,userDetail.getUserName())
      sessionStorage.setItem("authenticatedUser", userDetail.getUserName() );
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedin(){
    let userName  = sessionStorage.getItem("authenticatedUser")
    return !(userName===null);
  }

  logoutUser(){
    sessionStorage.removeItem("authenticatedUser")
  }
}
class userDet {
  constructor(private name:string,private role:string, private authenticated:boolean) {}
  getUserName(){
      return this.name;
  }
}