import { Injectable } from '@angular/core';
import { RestfulService } from '../shared/restful.service';
import { Medico } from './Medico';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MedicoService extends RestfulService<Medico> {
    constructor(public http: HttpClient) {
        super(http, 'public/medico');
    }
}