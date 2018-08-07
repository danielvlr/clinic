import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenStorage } from './token.storage';
 
@Injectable()
export class CanActivateAuthGuard implements CanActivate {
 
  constructor(private router: Router, private token:TokenStorage) {}
 
  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
        if (this.token.getToken()) {
            return true;
        }
        this.router.navigate(['/authentication/login']);
        return false;
    }
}