import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }

  performRegisterUser(reguserinp:reguser){
    const options = {headers: {'Content-Type': 'application/json'}};
    console.log("loggging " , JSON.stringify(reguserinp))
    return this.httpClient.post(`http://localhost:8080/api/register`,JSON.stringify(reguserinp),options)

  }
}
export class reguser {
  constructor(public email: string, public userName: string, public password: string, public retypepassword: string, public region: string) {

  }
}