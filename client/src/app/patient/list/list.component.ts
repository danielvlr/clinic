import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
    selector: 'patient-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent  implements OnInit {
  rows = [];
  count = 0;
  offset = 0;
  limit = 10;
  
  nome:String;

  constructor(public patientservice: PatientService){}

  ngOnInit() {
    this.page(this.offset, this.limit);
  }

  page(offset, limit) {
    this.fetch((results) => {
      this.count = results.length;

      const start = offset * limit;
      const end = start + limit;
      const rows = [...this.rows];

      for (let i = start; i < end; i++) {
        rows[i] = results[i];
      }

      this.rows = rows;
      console.log('Page Results', start, end, rows);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:8080/public/patient/');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  onPage(event) {
    console.log('Page Event', event);
    this.page(event.offset, event.limit);
  }
  search(){
    console.log('aSDSAD');
  }
}
