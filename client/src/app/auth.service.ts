import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const TOKEN_KEY = 'AuthToken';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }
  
    attemptAuth(username: string, password: string): Observable<any> {
      const credentials = {username: username, password: password};
      console.log('attempAuth ::');
      return this.http.post('http://localhost:8080/login', credentials, {responseType:"text"});
    }

    signOut() {
      window.sessionStorage.removeItem(TOKEN_KEY);
      window.sessionStorage.clear();
    }
  
    public saveToken(token: string) {
      window.sessionStorage.removeItem(TOKEN_KEY);
      window.sessionStorage.setItem(TOKEN_KEY,  token);
    }
  
    public getToken(): string {
      return sessionStorage.getItem(TOKEN_KEY);
    }    
}
