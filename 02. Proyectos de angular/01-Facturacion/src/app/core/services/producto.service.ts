import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../http/api.service';
import { Producto } from '../../shared/models/producto.model';
// import * as resources from 'src/app/configs/apiResources.json';
import { resources } from 'src/app/configs/api-resources.config';

@Injectable({
  providedIn: 'root'
})
export class ProductoService extends ApiService<Producto> {

  constructor(http: HttpClient) {
    super(http, resources.Producto.url);
   }
}
