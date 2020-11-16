import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpResponse,
  HttpEvent,
  HttpErrorResponse,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';

import { throwError, from, Observable } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private storage: Storage) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.storage.get("token"))
      .pipe(
        switchMap(token => {
          if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
          }

          if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
          }

          return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
                // do nothing for now
              }
              return event;
            }),
            catchError((error: HttpErrorResponse) => {
              return throwError(error);
            })
          );
        })
      );
  }

}
