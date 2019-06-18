import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ClienteRoutingModule } from './cliente.router.module';

@NgModule({
  declarations: [ClientesListaComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    ClienteRoutingModule
  ],
  exports: [
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
