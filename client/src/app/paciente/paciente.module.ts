import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { PacienteRoutes } from './paciente.routing';
import { PacienteService } from './paciente.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    RouterModule.forChild(PacienteRoutes),
    SharedModule
  ],
  declarations: [ 
    ListComponent,
    EditComponent
  ], providers: [PacienteService]
})

export class PacienteModule {}
