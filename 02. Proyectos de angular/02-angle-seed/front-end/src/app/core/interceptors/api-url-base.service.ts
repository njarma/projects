import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlBaseService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({ url: `${this.GetResourceUrl()}${req.url}${this.JsonExtension()}` });
    return next.handle(request);
  }

  private GetResourceUrl() {
    return environment.ambientes[environment.ambientes.seleccionado].apiUrlBase;
  }

  private JsonExtension() {
    if (environment.ambientes.seleccionado === 'mock') {
      return '.json';
    }
  }

}
