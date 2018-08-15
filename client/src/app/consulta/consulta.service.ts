import { Injectable } from '@angular/core';
import { RestfulService } from '../shared/restful.service';
import { Consulta } from './consulta';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ConsultaService extends RestfulService<Consulta> {
    constructor(public http: HttpClient) {
        super(http,'public/consulta');
    }

    public carrega(model: Consulta, blockUI = true): Observable<any> {
        return this.http.post(`http://localhost:8080/public/consulta/medico`, model, {responseType:"json"});
    }
}