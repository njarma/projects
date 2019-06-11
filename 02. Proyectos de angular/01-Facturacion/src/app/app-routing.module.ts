import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturasComponent } from './modules/facturas/facturas.component';
import { FacturaComponent } from './modules/facturas/factura/factura.component';

const routes: Routes = [
  {path: '', redirectTo: 'factura', pathMatch: 'full'},
  {path: 'facturas', component: FacturasComponent},
  {path: 'factura', children: [
    {path: '', component: FacturaComponent},
    {path: 'edit/:id', component: FacturaComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
