import { Component, OnInit } from '@angular/core';
import { Paginacao } from '../../shared/paginacao';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';

@Component({
    selector: 'paciente-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent  implements OnInit {
  filtro: Paciente;
  pagina: Paginacao<Paciente>;
  displayedColumns = ['nome', 'idade', 'telefone', 'acoes'];
  pageEvent: PageEvent;
  pageSizeOptions = [10, 15, 20];

  constructor(private router: Router, public pacienteeservice: PacienteService) {
  }
  
  ngOnInit() {
    this.filtro = new Paciente();
    this.paginaAutorizacoes(0, 10);
  }

  paginaAutorizacoes(numeroDaPagina?: number, quantidadeItensPorPagina?: number, event?: PageEvent) {
    this.pacienteeservice.filterList(this.filtro, numeroDaPagina, quantidadeItensPorPagina).subscribe(res => {
      this.pagina = res;
    });
    return event;
  }

  resetPaginacao() {
    const index = this.pageSizeOptions.indexOf(this.pagina.numberOfElements);
    this.paginaAutorizacoes(0, this.pageSizeOptions[index] > -1 ? this.pageSizeOptions[index] : 10);
  }

  navigate(id: number) {
    this.router.navigate(['paciente/edit', id]);
  }
}
