import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { ApiService } from 'src/app/core/http/api.service';
// import * as resources from 'src/app/configs/apiResources.json';
import { resources } from 'src/app/configs/api-resources.config';

@Injectable({
  providedIn: 'root'
})

export class ClienteService extends ApiService<Cliente> {

  constructor(http: HttpClient) {
      super(http, resources.Cliente.url);

  }

}