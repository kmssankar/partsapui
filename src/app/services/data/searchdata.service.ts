import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from'@angular/common/http'

export class ListStrings{
  constructor( lists:string[]){};
}

export class AccyDet{
  constructor(accycd:string , accydesc:string){};
}

export class report{
  constructor(name:string , value:number){}
}

@Injectable({
  providedIn: 'root'
})
export class SearchdataService {

  constructor(private http:HttpClient ) { }

  // Since it is observable we are just mentioning what URL to call
   executeGetSeriesDataService(){
     return this.http.get<ListStrings>('http://localhost:8080/series')
   }

   executeGetModelyrDataService(series:string){
    return this.http.get<ListStrings>(`http://localhost:8080/modelyr/${series}`)
  }

  executeGetModelcdDataService(series:string,mdlyr:string){
    return this.http.get<ListStrings>(`http://localhost:8080/modelcds/${series}/${mdlyr}`)
  }

  executeGetAccyDetDataService(series:string,mdlyr:string,mdlcd:string){
    return this.http.get<AccyDet[]>(`http://localhost:8080/accycodes/${series}/${mdlyr}/${mdlcd}`)
  }

  executeGetAccySalesService(series:string,mdlyr:string,mdlcd:string,accycds:string[]){
    return this.http.get<report[]>(`http://localhost:8080/accysalesrep/${series}/${mdlyr}/${mdlcd}/${accycds}`)
  }

  //Basic should be used with space in the starting as basic Aut
  createbasicAuthHeader(){
    let usename='admin'
    let password='adminpass'
    let baseAuth =  'Basic ' + window.btoa(usename +':'+ password)
    return baseAuth
  }

  createHeaderwithBasicAuth(){
    let basicAuth = this.createbasicAuthHeader();
    return new HttpHeaders({Authorization: basicAuth})
  }
}


