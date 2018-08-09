import { Injectable } from '@angular/core';
import { HttpBaseService } from '../shared/httpbase.service';
import { RestfulService } from '../shared/restful.service';
import { Paciente } from './paciente';

@Injectable()
export class PacienteService extends RestfulService<Paciente> {
    constructor( public http: HttpBaseService) {
        super(http, 'public/paciente');
    }
}