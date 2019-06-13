import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { environment } from '@environments/environment';
import { appToastr } from '@configs/app-toastr.config';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements HttpInterceptor {

  constructor(
    private toastr: ToastrService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req).pipe(catchError(error => this.errorHandler(error)));
  }

  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    if (!environment.production) {
      console.error('Request error: ' + JSON.stringify(response));
    }

    // Se podría armar un switch para cada código de http devuelto

    this.toastr.error(response['message'], appToastr.error);
    throw response;
  }
}
