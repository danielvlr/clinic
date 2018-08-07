import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

    constructor(private http: Http) {
    }
  
    attemptAuth(username: string, password: string): Observable<any> {
      const credentials = {username: username, password: password};
      console.log('attempAuth ::');
      return this.http.post('http://localhost:8080/login', credentials);
    }
}
