import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// Use HTTP Interceptor to modify the request and allow next operation to Happen 
//by returning next.handle(requesttoIntercept);
export class ApphttpInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let  requesttoIntercept = req.clone({setHeaders :
      { Authorization : this.createbasicAuthString()}})
    return next.handle(requesttoIntercept);
  }

  createbasicAuthString(){
    let usename='admin'
    let password='adminpass'
    let baseAuth =  'Basic ' + window.btoa(usename +':'+ password)
    return baseAuth
  }

}
