import { Injectable } from '@angular/core';
import { Factura } from '@shared/models/factura.model';
import { FacturaDetalle } from '@shared/models/factura-detalle.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { ApiService } from '@core/http/api.service';
// import * as resources from 'src/app/configs/apiResources.json';
import { resources } from '@configs/api-resources.config';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { Observable } from 'rxjs';

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

  getFactura(facId: number): Observable<any> {
      return this.buscarPorId( facId );
  }

  eliminarFactura(facId: number): Observable<Factura[]> {
      return this.eliminar( facId )
                  .pipe(
                    mergeMap( data => this.buscarTodos())
                  );
  }
}
