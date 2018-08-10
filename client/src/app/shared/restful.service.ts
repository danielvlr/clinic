import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseModel } from "../shared/basemodel";
import { HttpBaseService } from './httpbase.service';
import { Paginacao } from './paginacao';


export interface RestfulModel<T extends BaseModel> {
  model?: T;
  numberOfPage: number;
  registriesPerPage: number;
}
@Injectable({
  providedIn: 'root'
})
export class RestfulService<T extends BaseModel> {

  constructor(protected http: HttpBaseService, @Inject('api-url') protected apiUrl: string) { }

  public get(id: number, blockUI = true): Observable<T> {
    return this.http.get(`/${this.apiUrl}/${id}`, blockUI);
  }

  public getAll(blockUI = true): Observable<T[]> {
    return this.http.get(`/${this.apiUrl}/all`, blockUI);
  }

  public save(model: T, blockUI = true): Observable<T> {
    return this.http.post(`/${this.apiUrl}`, model, blockUI);
  }

  public update(model: T, blockUI = true): Observable<T> {
    return this.http.put(`/${this.apiUrl}`, model, blockUI);
  }

  public remove(id: number, blockUI = true): Observable<T> {
    return this.http.delete(`/${this.apiUrl}/${id}`, blockUI);
  }

  public filterList(model: T, numeroDaPagina: number, registrosPorPagina: number, blockUI = true): Observable<Paginacao<T>> {
    return this.http.post(`/${this.apiUrl}/${numeroDaPagina !== undefined ? numeroDaPagina : 0}/${registrosPorPagina !== undefined ? registrosPorPagina : 10}`, model, blockUI);
  }

  public setApiURL(apiUrl: string) {
    this.apiUrl = apiUrl;
  }
}
