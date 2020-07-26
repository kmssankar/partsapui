import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';

export class userDet {
  constructor(public userName: string, public authority: string, public userArea: string) { }
  public getUserName() {
    return this.userName;
  }
  public getUserrole() {
    return this.authority;
  }
  public getuserArea() {
    return this.userArea;
  }
}
//service will have @Injectable by default 
@Injectable({
  providedIn: 'root'
})
export class DefaultAuthService {

  userDetail:userDet;
  successfulLogin : boolean;
  constructor(private httpClient: HttpClient) { }


  executeGetuserdetaftAuth(username: string, password: string) {

    return this.httpClient.get<userDet>(`http://localhost:8080/partsuserdetails/${username}`, this.createHeaderwithBasicAuth(username, password))
  }

 
  getusernamefromSession(){
    return sessionStorage.getItem("authenticatedUser");
  }

  

  isUserLoggedin() {
    let userName = sessionStorage.getItem("authenticatedUser")
    return !(userName === null);
  }

  logoutUser() {
    sessionStorage.removeItem("authenticatedUser")
    sessionStorage.removeItem("basicAuthstr")
    sessionStorage.removeItem("userrole")
    sessionStorage.removeItem("userArea")
  }

  getbasicAuthfromstorage() {
    let basicAuthstr = sessionStorage.getItem("basicAuthstr");
    return basicAuthstr;
  }

  createbasicAuth(username: string, password: string) {
    let baseAuth = 'Basic ' + window.btoa(username + ':' + password)
    return baseAuth
  }

  createHeaderwithBasicAuth(username: string, password: string) {
      let httpOptions = {
      headers: new HttpHeaders(
        {
          'Authorization': this.createbasicAuth(username, password),
        }
      )
    };
    return httpOptions;
  }
}

