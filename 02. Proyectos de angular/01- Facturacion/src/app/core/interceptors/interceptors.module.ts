import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiUrlBaseService } from './api-url-base.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenService } from './http-token.service';
import { ErrorHandlerService } from './error-handler.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class InterceptorsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: InterceptorsModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiUrlBaseService,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpTokenService,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorHandlerService,
          multi: true
        }
      ]
    };
  }
}