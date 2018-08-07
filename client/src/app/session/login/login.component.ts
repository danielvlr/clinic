import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";
import { MatDialog } from '@angular/material';
import { AuthService } from '../../auth.service';
import { TokenStorage } from '../../token.storage';

@Component({
   selector: 'ms-login-session',
   templateUrl:'./login-component.html',
   styleUrls: ['./login-component.scss'],
   encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  
  constructor(private router: Router, public dialog: MatDialog, private authService: AuthService, private token: TokenStorage) { }

  username: string;
  password: string;

  login(): void {
    console.log(this.username);
    this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        console.log(data._body);
        this.token.saveToken(data._body);
        this.router.navigate(['/']);
      }
    );
  }	
}



