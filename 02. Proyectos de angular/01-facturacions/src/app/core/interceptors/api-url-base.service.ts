import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlBaseService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({ url: `${this.GetResourceUrl()}${req.url}` });
    return next.handle(request);
  }

  private GetResourceUrl() {
    console.log(environment.ambientes[environment.ambientes.seleccionado].apiUrlBase);
    return environment.ambientes[environment.ambientes.seleccionado].apiUrlBase;
  }

}
