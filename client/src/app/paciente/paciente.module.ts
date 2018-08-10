import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatInputModule,
  MatRadioModule,
  MatButtonModule,
  MatProgressBarModule,
  MatToolbarModule, 
  MatTableModule,
  MatPaginatorModule,
  MatSelectModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatIconModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';
import { PacienteRoutes } from './paciente.routing';
import { PacienteService } from './paciente.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PacienteRoutes),
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatTableModule,
    MatSelectModule,
    CdkTableModule,
    MatPaginatorModule,
    NgxDatatableModule,
    FlexLayoutModule
  ],
  declarations: [ 
    ListComponent,
    EditComponent
  ], providers: [PacienteService]
})

export class PacienteModule {}
