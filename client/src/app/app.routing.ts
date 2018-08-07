import { Routes } from '@angular/router';

import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { CanActivateAuthGuard } from 'app/can-activate.authguard';
import { LoginComponent } from './session/login/login.component';

export const AppRoutes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'home',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivate: [CanActivateAuthGuard]
  }]
}, {
  path: 'authentication',
  component: LoginComponent,
  children: [{
    path: 'authentication',
    loadChildren: './session/session.module#SessionModule'
  },{
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  }]
}, {
  path: '**',
  redirectTo: 'session/404'
}];
