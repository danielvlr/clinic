import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './auth.service';
import { SessionModule } from './session/session.module';
import { PacienteModule } from './paciente/paciente.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { JwtInterceptor, InterceptorOne, InterceptorTwo } from './jwt.interceptor';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpModule,
    SessionModule,
    PacienteModule,
    DashboardModule,
  ],
  providers: [ 
    {
       provide: PERFECT_SCROLLBAR_CONFIG,
       useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },{
      useClass: JwtInterceptor,
      provide: HTTP_INTERCEPTORS,
      multi: true
    },    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorOne,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorTwo,
      multi: true,
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
