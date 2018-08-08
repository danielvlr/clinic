import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatInputModule,
  MatRadioModule,
  MatButtonModule,
  MatProgressBarModule,
  MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatIconModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { PatientRoutes } from './patient.routing';
import { RouterModule } from '@angular/router';
import { PatientService } from './patient.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PatientRoutes),
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    NgxDatatableModule,
    FlexLayoutModule
  ],
  declarations: [ 
    ListComponent,
    EditComponent
  ], providers: [PatientService]
})

export class PatientModule {}
