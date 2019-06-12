import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { InterceptorsModule } from './core/interceptors/interceptors.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturasComponent } from './modules/facturas/facturas.component';
import { FacturaComponent } from './modules/facturas/factura/factura.component';
import { FacturaDetalleComponent } from './modules/facturas/factura-detalle/factura-detalle.component';
import { FacturaService } from './core/services/factura.service';
import { ProductoService } from './core/services/producto.service';

@NgModule({
  declarations: [
    AppComponent,
    FacturasComponent,
    FacturaComponent,
    FacturaDetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    InterceptorsModule,
    // InterceptorsModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  entryComponents: [FacturaDetalleComponent],
  providers: [
    FacturaService,
    ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
