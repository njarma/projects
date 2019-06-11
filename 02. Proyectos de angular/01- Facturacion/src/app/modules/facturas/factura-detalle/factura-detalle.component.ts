import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FacturaDetalle } from 'src/app/shared/models/factura-detalle.model';
import { ProductoService } from 'src/app/core/services/producto.service';
import { Producto } from 'src/app/shared/models/producto.model';
import { NgForm } from '@angular/forms';
import { FacturaService } from 'src/app/core/services/factura.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-factura-detalle',
  templateUrl: './factura-detalle.component.html',
  styles: []
})
export class FacturaDetalleComponent implements OnInit {

  formData: FacturaDetalle;
  /* CODIGO MAXI
  productoLista: Producto[];
  */

  /* NUEVA IMPLEMENTACION */
 productoLista$: Observable<Producto[]>;

  esValido: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public popUpRef: MatDialogRef<FacturaDetalleComponent>,
    private productoService: ProductoService,
    private facturaService: FacturaService) { }

  ngOnInit() {
  /* NUEVA IMPLEMENTACION */
     this.productoLista$ = this.productoService.buscarTodos();
      this.productoService.buscarTodos().subscribe( data => console.log(data));

    if (this.data.facturaDetalleIndex === null) {
      this.formData = {
        fdeId: null,
        facId: this.data.facId,
        proId: 0,
        fdeCantidad: 0,
        proNombre: '',
        proPrecio: 0,
        Total: 0
      };
    }
    else {
      this.formData = Object.assign({}, this.facturaService.facturaDetalle[this.data.facturaDetalleIndex]);
    }
  }

  obtenerPrecio(ctrl) {
    if (ctrl.selectedIndex === 0) {
      this.formData.proPrecio = 0;
      this.formData.proNombre = '';
    }
    else {
      /* NUEVA IMPLEMENTACION */
      this.productoLista$.subscribe(
         (productoLista: Producto[] ) => {
          this.formData.proPrecio = productoLista[ctrl.selectedIndex-1].proPrecio;
          this.formData.proNombre = productoLista[ctrl.selectedIndex-1].proNombre;
        }
      );
      /*
      this.formData.proPrecio = this.productoLista[ctrl.selectedIndex-1].proPrecio;
      this.formData.proNombre = this.productoLista[ctrl.selectedIndex-1].proNombre;*/
    }
    this.calcularTotal();
  }

  calcularTotal() {
    this.formData.Total = parseFloat((this.formData.fdeCantidad * this.formData.proPrecio).toFixed(2));
  }

  onSubmit(form: NgForm){
    if (this.validarFormulario(form.value)) {
      if (this.data.facturaDetalleIndex === null) {
        this.facturaService.facturaDetalle.push(form.value);
      }
      else {
        this.facturaService.facturaDetalle[this.data.facturaDetalleIndex] = form.value;
      }
      this.popUpRef.close();
    }
  }

  validarFormulario(formData: FacturaDetalle) {
    this.esValido = true;
    if (formData.proId === 0) {
      this.esValido = false;
    }
    if (formData.fdeCantidad === 0) {
      this.esValido = false;
    }

    return this.esValido;
  }
}
