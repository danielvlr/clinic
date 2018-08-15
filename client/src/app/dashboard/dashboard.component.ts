import { Component, ViewChild, OnInit } from '@angular/core';
import { Options } from 'fullcalendar';
import { CalendarComponent } from 'ng-fullcalendar';
import { ConsultaService } from '../consulta/consulta.service';
import { MedicoService } from '../medico/medico.service';
import { Medico } from '../medico/medico';
import { Consulta } from '../consulta/consulta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit  {
  calendarOptions: Options;
  displayEvent: any;
  events = null;
  medicos: any;
  consulta: Consulta;
  
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(public consultaservice: ConsultaService, public medicoservice: MedicoService, public router: Router) { }

  ngOnInit() {
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      events: []
    };
    this.consulta = new Consulta();
    this.consulta.medico = new Medico();
    this.loadmedicos();
  }

  clickButton(model: any) {
    this.displayEvent = model;
  }
  dayClick(model: any) {
    console.log(model);
  }
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }
  loadmedicos(){
    this.medicoservice.getAll().subscribe(data => {
      this.medicos = data;
    });
  }

  loadevents() {
    this.consultaservice.carrega(this.consulta).subscribe(data => {
      this.events = data;
    });
  }

  insert(){
    this.router.navigate(['consulta']);
  }
}