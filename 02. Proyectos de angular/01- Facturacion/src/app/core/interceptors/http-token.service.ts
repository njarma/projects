import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpTokenService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

   /*  const token = this.authenticationService.getToken();
    if (token) {
      headersConfig['Authorization'] = `${token}`;
    } */
    // 'Authorization', `Bearer ${sessionStorage.getItem('authToken')}`;

    const request = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'A123132132ASASDAFDF'
        // 'Authorization': `Bearer ${this.auth.getToken()}`
      }
    });

    return next.handle(request);
  }

}
