import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ClienteRoutingModule } from './cliente.router.module';

@NgModule({
  declarations: [ClienteComponent],
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
