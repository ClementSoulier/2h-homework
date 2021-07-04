import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpMockInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('users.json/')) {
      const userId = request.url.substr(request.url.length - 3, request.url.length);
      request = request.clone({
        url: `http://localhost:4200/assets/mock-data/user${userId}.json`,
      });
    }

    if (request.url.includes('tickets.json/')) {
      const ticketId = request.url.substr(request.url.length - 1, request.url.length);
      request = request.clone({
        url: `http://localhost:4200/assets/mock-data/ticket${ticketId}.json`,
      });
    }

    return next.handle(request);
  }
}
