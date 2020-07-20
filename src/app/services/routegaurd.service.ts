import { DefaultAuthService } from './default-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutegaurdService implements CanActivate{

  constructor(private defaultAuthService :DefaultAuthService,private router:Router) { }

  //canAcivate Method for routeGaurd
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {  
    if(this.defaultAuthService.isUserLoggedin()) return true;
    this.router.navigate(['login'])
    return false;
  }
}
