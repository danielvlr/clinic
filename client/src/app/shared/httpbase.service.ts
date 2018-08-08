import { Observable } from "rxjs/Observable"; // <- add this import
import { catchError, finalize, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth.service';


@Injectable()
export class HttpBaseService {

  private apiUrl = '';
  private body: Object = {};
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private authservice: AuthService) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.apiUrl = environment.backendUrl;
  }

  public get(resource: string, blockUI = true) {
    this.appendTokenToRequest();
    return this.http.get(this.apiUrl.concat(resource), this.getRequestOptions()).pipe(finalize(() => {
    }), map((res) => this.refreshToken(res)),
      catchError(res => {
        this.formatError(res);
        return res;
      }));
  }

  public post(resource: string, body: any, blockUI = true) {
    this.appendTokenToRequest();
    if (body !== undefined) {
      this.body = JSON.stringify(body);
    }

    return this.http.post(this.apiUrl.concat(resource), this.body, this.getRequestOptions()).pipe(finalize(() => { })
    , map(res => this.refreshToken(res)),
      catchError(res => {
        this.formatError(res);
        return res;
      }));
  }

  public put(resource: string, body: any, blockUI = true) {
    this.appendTokenToRequest();
    if (body !== undefined) {
      this.body = JSON.stringify(body);
    }

    return this.http.put(this.apiUrl.concat(resource), this.body, this.getRequestOptions()).pipe(finalize(() => { })
    , map((res) => this.refreshToken(res)),
      catchError(res => {
        this.formatError(res);
        return res;
      }));
  }

  public delete(resource: string, blockUI = true) {
    this.appendTokenToRequest();

    return this.http.delete(this.apiUrl.concat(resource), this.getRequestOptions()).pipe(
      finalize(() => { })
      , catchError(res => {
        this.formatError(res);
        return res;
      }));
  }

  private formatError(res) {

    if (res.headers != null && res.headers.has('WWW-Authenticate')) {
      if (res.headers.get('WWW-Authenticate') === 'sem autorização de acesso') {
        //this.shellService.alert().warning({timeout: 5000, messages: ['Você não tem permissão para usar este recurso!!!']});
      } else {
        //this.modalLogoffService.expirarSessao();
      }
      return;
    }

    if (res.error['tipo-excecao'] === 'validacao') {
      const mensagensErro = new Array<string>();
      res.error['conteudo'].forEach(err => {
        mensagensErro.push(err.causa);
      });
      //this.shellService.alert().warning({ timeout: 10000, messages: mensagensErro });
    } else if (res.error['tipo-excecao'] === 'request-outros-sistemas') {
      //this.shellService.alert().error({ timeout: 10000, messages: [res.error['causa']] });
    } else if (res.error['tipo-excecao'] === 'transacao') {
      //this.shellService.alert().error({ timeout: 10000, messages: [res.error['causa']] });
    } else if (res.error['tipo-excecao'] === 'argumento-ilegal') {
      //this.shellService.alert().warning({ timeout: 10000, messages: [res.error['causa']] });
    }
  }

  private refreshToken(res) {
    return this.authservice.getToken();
  }

  private appendTokenToRequest() {
    if (this.authservice.getToken()) {
      this.headers = this.headers.set('x-access-token', this.authservice.getToken());
    }
  }

  private getRequestOptions(): Object {
    return { headers: this.headers, observe: 'response' };
  }
}