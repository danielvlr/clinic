import { Component, OnInit } from '@angular/core';
import { Paginacao } from '../../shared/paginacao';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';


import { Consulta } from '../consulta';
import { ConsultaService } from '../consulta.service';

@Component({
    selector: 'Consulta-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent  implements OnInit {
  filtro: Consulta;
  pagina: Paginacao<Consulta>;
  displayedColumns = ['nome', 'idade', 'telefone', 'acoes'];
  pageEvent: PageEvent;
  pageSizeOptions = [10, 15, 20];

  constructor(private router: Router, public pacienteeservice: ConsultaService) {
  }
  
  ngOnInit() {
    this.filtro = new Consulta();
    this.paginaAutorizacoes(0, 10);
  }

  paginaAutorizacoes(numeroDaPagina?: number, quantidadeItensPorPagina?: number, event?: PageEvent) {
    this.pacienteeservice.filterList(this.filtro, numeroDaPagina, quantidadeItensPorPagina).subscribe(res => {
      this.pagina = res;
    });
    return event;
  }

  navigate(id: number) {
    this.router.navigate(['consulta/edit', id]);
  }
}
