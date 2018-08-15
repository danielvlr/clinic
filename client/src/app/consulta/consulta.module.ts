import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { ConsultaService } from './consulta.service';
import { ConsultaRoutes } from './consulta.routing';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    RouterModule.forChild(ConsultaRoutes),
    SharedModule
  ],
  declarations: [ 
    ListComponent,
    EditComponent
  ], 
  providers: [ConsultaService]
})

export class ConsultaModule {}
