import { Injectable } from '@angular/core';
import { RestfulService } from '../shared/restful.service';
import { Paciente } from './paciente';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PacienteService extends RestfulService<Paciente> {
    constructor( public http: HttpClient) {
        super(http, 'public/paciente');
    }
}