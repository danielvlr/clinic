import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'paciente-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
  entity: Paciente = new Paciente();

  public tipoSexo = [
    {"id": "M", "name": "Masculino"},
    {"id": "F", "name": "Feminino"}
  ]

  constructor(public service : PacienteService, private activatedroute: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {
    let id = +this.activatedroute.snapshot.paramMap.get('id');
    if (id) {
      this.service.get(id).subscribe(res => {
        this.entity = res;
      });
    }
  }

  save(){
    this.service.save(this.entity);
    //this.router.navigate(['paciente']);
  }


}
