import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";
import { MatDialog } from '@angular/material';
import { AuthService } from '../../auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
   selector: 'ms-login-session',
   templateUrl:'./login-component.html',
   styleUrls: ['./login-component.scss'],
   encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  
  constructor(private router: Router,private authservice: AuthService) { }

  username: string;
  password: string;

  login(): void {
      this.authservice.attemptAuth(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.authservice.saveToken(data);
        this.router.navigate(['/home']);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
        console.log(err.error);
      }
    );
  }	
}



