import { Routes } from '@angular/router';

import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { LoginComponent } from './session/login/login.component';
import { CanActivateAuthGuard } from './can-activate.authguard';

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
  }, {
    path: 'paciente',
    loadChildren: './paciente/paciente.module#PacienteModule',
    canActivate: [CanActivateAuthGuard]
  }, {
    path: 'consulta',
    loadChildren: './consulta/consulta.module#ConsultaModule',
    canActivate: [CanActivateAuthGuard]

  }]
}, {
  path: '',
  component: LoginComponent,
  children: [{
    path: 'authentication',
    loadChildren: './session/session.module#SessionModule'
  }, {
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  }]
}, {
  path: '**',
  component: LoginComponent,
  children: [{
    path: 'authentication',
    loadChildren: './session/session.module#SessionModule'}]
}];



