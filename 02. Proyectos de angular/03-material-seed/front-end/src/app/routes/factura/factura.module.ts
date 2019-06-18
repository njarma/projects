import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaListaComponent } from './factura-lista/factura-lista.component';
import { FacturaComponent } from './factura/factura.component';
import { FacturaDetalleComponent } from './factura-detalle/factura-detalle.component';

@NgModule({
  declarations: [FacturaListaComponent, FacturaComponent, FacturaDetalleComponent],
  imports: [
    CommonModule
  ]
})
export class FacturaModule { }
