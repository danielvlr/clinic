import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse }  from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
        console.log('asdad');
      return next.handle(req).do(evt => {
        if (evt instanceof HttpResponse) {
          console.log('---> status:', evt.status);
          console.log('---> filter:', req.params.get('filter'));
        }
      });
  
    }
  }

  
  @Injectable()
  export class InterceptorOne implements HttpInterceptor {
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('InterceptorOne is working');
      return next.handle(req);
    }
  }
  
  @Injectable()
  export class InterceptorTwo implements HttpInterceptor {
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('InterceptorTwo is working');
      return next.handle(req);
    }
  }