import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
 
@Injectable()
export class CanActivateAuthGuard implements CanActivate {
 
  constructor(private router: Router, private authservice:AuthService) {}
 
  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
        if (this.authservice.getToken()) {
            return true;
        }
        this.router.navigate(['/authentication/login']);
        return false;
    }
}