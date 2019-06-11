import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/core/services/factura.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FacturaDetalleComponent } from '../factura-detalle/factura-detalle.component';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styles: []
})
export class FacturaComponent implements OnInit {

  clienteLista$: Observable<Cliente[]>;
  clienteLista: Cliente[];

  esValido: boolean = true;


  constructor(public service: FacturaService,
              private popUp: MatDialog,
              private clienteService: ClienteService,
              private toastr: ToastrService,
              private router: Router,
              private parametrosRuta: ActivatedRoute) { }

  ngOnInit() {
    let facId = this.parametrosRuta.snapshot.paramMap.get('id');
    if (facId === null) {
      this.resetForm();
    }
    else {
        this.service.getFactura(parseInt(facId))
                    .pipe(take(1))
                    .subscribe(res => {
          this.service.formData = res.factura;
          this.service.facturaDetalle = res.facturaDetalle;
        });
    }
    this.clienteLista$ = this.clienteService.buscarTodos();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      facId: null,
      facNro: '000' + Math.floor(10000 + Math.random() * 90000).toString(),
      cliId: 0,
      fpaNombre: '',
      facTotal: 0,
      detallesDeleted: ''
    };
    this.service.facturaDetalle = [];
  }

  AgregaroEditarDetalle(facturaDetalleIndex, facId) {
    const popUpConfig = new MatDialogConfig();
    popUpConfig.autoFocus = true;
    popUpConfig.disableClose = true;
    popUpConfig.width = '50%';
    popUpConfig.data = {facturaDetalleIndex, facId};
    this.popUp.open(FacturaDetalleComponent, popUpConfig).afterClosed().subscribe(res => {
      this.calcularTotalFactura();
    });
  }

  eliminarDetalle(fdeId: number, i: number) {
    if (fdeId != null)
    {
      this.service.formData.detallesDeleted += fdeId + ',';
    }

    this.service.facturaDetalle.splice(i, 1);
    this.calcularTotalFactura();
  }

  calcularTotalFactura() {
    this.service.formData.facTotal = this.service.facturaDetalle.reduce((prev, curr) => {
      return prev + curr.Total;
    }, 0);

    this.service.formData.facTotal = parseFloat((this.service.formData.facTotal).toFixed(2));
  }

  validarFormulario() {
    this.esValido = true;
    if(this.service.formData.cliId === 0)
    {
      this.esValido = false;
    }
    if(this.service.facturaDetalle.length === 0)
    {
      this.esValido = false;
    }
    if(this.service.formData.fpaNombre === '')
    {
      this.esValido = false;
    }
    return this.esValido;
  }

  onSubmit(form: NgForm) {
    if (this.validarFormulario()) {
      this.service.gestionFacturas().subscribe(res => {
        this.resetForm();
        this.toastr.success('Grabación exitosa!!', 'Gestion de Facturas');
        this.router.navigate(['/facturas']);
      });
    }
  }
}
