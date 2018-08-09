import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'paciente-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
  public entity: Paciente;
  public nome: String;
  constructor(public service : PacienteService, private activatedroute: ActivatedRoute ) { }
  ngOnInit() {
    let id = +this.activatedroute.snapshot.paramMap.get('id');
    if (id) {
      this.service.get(id).subscribe(res => {
        this.entity = res;
      });
    }
  }
}
