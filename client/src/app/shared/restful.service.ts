import { Observable } from "rxjs/Observable"; // <- add this import
import { of as observableOf } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

import { Injectable, Inject } from '@angular/core';
import { BaseModel } from "./basemodel";
import { Paginacao } from './paginacao';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from "environments/environment";


export interface RestfulModel<T extends BaseModel> {
  model?: T;
  numberOfPage: number;
  registriesPerPage: number;
}
@Injectable({
  providedIn: 'root'
})
export class RestfulService<T extends BaseModel> {

  private body: Object = {};
  apiUrl: String;

  constructor(public http: HttpClient, protected path: string) {
    this.apiUrl = environment.backendUrl + path;
  }

  public get(id: number, blockUI = true): Observable<T> {
    return this.http.get(`${this.apiUrl}/${id}`, this.getRequestOptions()).pipe(finalize(() => {
    }), map((res) => this.refreshToken(res)),
      catchError(res => {
        return observableOf(res);
      }));

  }

  public getAll(blockUI = true): Observable<T[]> {
    return this.http.get(`${this.apiUrl}/all`, this.getRequestOptions()).pipe(finalize(() => {
    }), map((res) => this.refreshToken(res)),
      catchError(res => {
        return observableOf(res);
      }));
  }

  public save(model: T, blockUI = true): Observable<T> {
    if (model !== undefined) {
      this.body = JSON.stringify(model);
    }
    return this.http.post(`${this.apiUrl}`, this.body, this.getRequestOptions()).pipe(finalize(() => { })
      , map((res) => this.refreshToken(res)),
      catchError(res => {
        return observableOf(res);
      }));
  }

  public update(model: T, blockUI = true): Observable<T> {
    if (model !== undefined) {
      this.body = JSON.stringify(model);
    }
    return this.http.put(`${this.apiUrl}`, this.body, this.getRequestOptions()).pipe(finalize(() => { })
      , map((res) => this.refreshToken(res)),
      catchError(res => {
        return observableOf(res);
      }));
  }

  public remove(id: number, blockUI = true): Observable<T> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getRequestOptions()).pipe(
      finalize(() => { })
      , catchError(res => {
        return observableOf(res);
      }));
  }

  public filterList(model: T, numeroDaPagina: number, registrosPorPagina: number, blockUI = true): Observable<Paginacao<T>> {
    if (model !== undefined) {
      this.body = JSON.stringify(model);
    }
    return this.http.post(`${this.apiUrl}/${numeroDaPagina !== undefined ? numeroDaPagina : 0}/${registrosPorPagina !== undefined ? registrosPorPagina : 10}`, this.body, this.getRequestOptions()).pipe(finalize(() => { })
      , map((res) => this.refreshToken(res)),
      catchError(res => {
        return observableOf(res);
      }));
  }

  private refreshToken(res) {
    const contentType = res.headers.get('Content-type');
    if (!contentType) {
      return null;
    }
    if (contentType.includes('json')) {
      return res.body;
    } else if (contentType.includes('text')) {
      return res.text();
    }
  }

  private getRequestOptions(): Object {
    return { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response' };
  }
}
