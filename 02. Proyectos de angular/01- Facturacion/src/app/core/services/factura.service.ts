import { Injectable } from '@angular/core';
import { Factura } from '../../shared/models/factura.model';
import { FacturaDetalle } from '../../shared/models/factura-detalle.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/core/http/api.service';
// import * as resources from 'src/app/configs/apiResources.json';
import { resources } from 'src/app/configs/api-resources.config';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';

@Injectable({
  providedIn: 'root'
})
export class FacturaService extends ApiService<Factura> {

  formData: Factura;
  facturaDetalle: FacturaDetalle[];

  constructor(http: HttpClient) {
    super(http, resources.Factura.url);
   }

  gestionFacturas() {
    var body = {
      ...this.formData,
      FacturaDetalles: this.facturaDetalle
    };
    return this.guardar( body );
  }

  getFactura(facId: number): any {
    return this.http.get(environment.apiURL + '/Factura/' + facId).toPromise();
  }

  eliminarFactura(facId: number) {
      return this.eliminar( facId ).pipe(
          mergeMap( data => this.buscarTodos())
      );
  }
}
