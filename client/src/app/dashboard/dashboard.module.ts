import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { SharedModule } from '../shared/shared.module';
import { FullCalendarModule } from 'ng-fullcalendar';
import { ConsultaService } from '../consulta/consulta.service';
import { MedicoService } from '../medico/medico.service';
import { JwtInterceptor } from '../jwt.interceptor';


@NgModule({
  imports: [
    FullCalendarModule,
    RouterModule.forChild(DashboardRoutes),
    SharedModule
  ],
  declarations: [ DashboardComponent ], 
  providers: [ConsultaService, MedicoService, JwtInterceptor]
})

export class DashboardModule { }
