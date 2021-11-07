import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';
import { Router } from "@angular/router";
import { LoginandregistrationService } from '../services/loginandregistration.service'

@Injectable({
  providedIn: 'root'
})
export class AouthGuard implements CanActivate {
  constructor(private service: LoginandregistrationService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (localStorage.getItem('token')) {
      // console.log(localStorage.getItem('token'));
      // console.log("outh")
      // this.router.navigateByUrl('/curd');

      return true;
    }
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
    return false;
  }

}
