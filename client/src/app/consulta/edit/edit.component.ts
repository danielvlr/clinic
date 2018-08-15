import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from '../consulta';
import { ConsultaService } from '../consulta.service';

@Component({
    selector: 'consulta-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
  entity: Consulta = new Consulta();

  public tipoSexo = [
    {"id": "M", "name": "Masculino"},
    {"id": "F", "name": "Feminino"}
  ]

  constructor(public service : ConsultaService, private activatedroute: ActivatedRoute, private router: Router) { }
  
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
    this.router.navigate(['consulta']);
  }


}
