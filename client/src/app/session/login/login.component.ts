import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";
import { MatDialog } from '@angular/material';
import { AuthService } from '../../auth.service';

@Component({
   selector: 'ms-login-session',
   templateUrl:'./login-component.html',
   styleUrls: ['./login-component.scss'],
   encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  
  constructor(private router: Router, public dialog: MatDialog, private authService: AuthService, private authservice: AuthService) { }

  username: string;
  password: string;

  login(): void {
      this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        console.log(data._body);
        this.authservice.saveToken(data._body);
        this.router.navigate(['/home']);
      },
      error => {
        console.log("Erro ao tentar autenticar");
      }
    );
  }	
}



