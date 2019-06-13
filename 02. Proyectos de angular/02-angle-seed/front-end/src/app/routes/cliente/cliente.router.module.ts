import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListaComponent } from '@routes/cliente/clientes-lista/clientes-lista.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesListaComponent
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ClienteRoutingModule { }