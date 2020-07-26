import { DefaultAuthService } from './../default-auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// Use HTTP Interceptor to modify the request and allow next operation to Happen 
//by returning next.handle(requesttoIntercept);
export class ApphttpInterceptorService implements HttpInterceptor {

  constructor(private defaultAuthService:DefaultAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.defaultAuthService.isUserLoggedin()){
      console.log("intercepting HTTP")
    let  requesttoIntercept = req.clone({setHeaders :
      { Authorization : this.defaultAuthService.getbasicAuthfromstorage()}})
    return next.handle(requesttoIntercept);
    }
    else{
      console.log("Not intercepting HTTP");
      return next.handle(req);
    }
  }
}

