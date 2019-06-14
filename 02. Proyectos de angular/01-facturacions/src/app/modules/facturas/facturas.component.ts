import { Component, OnInit } from '@angular/core';
import { FacturaService } from '@core/services/factura.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '@core/services/cliente.service';
import { Observable } from 'rxjs';
import { Factura } from '@shared/models/factura.model';


@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  ListaFacturas$: Observable<Factura[]>;
  constructor(private router: Router,
              private toastr: ToastrService,
              private factura: FacturaService) { }

  ngOnInit() {
    this.ListaFacturas$ = this.factura.buscarTodos();
  }

  editarFactura(facId: number) {
    this.router.navigate(['/factura/edit/' + facId]);
  }

  eliminarFactura(facId: number) {
    if(confirm('Estas seguro de eliminar esta Factura?')) {
      this.ListaFacturas$ = this.factura.eliminarFactura( facId );
      this.toastr.warning('Eliminación exitosa!!', 'Gestion de Facturas');
    }
  }
}
