import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ClienteService } from '../../../core/services/cliente.service';
import { take } from 'rxjs/operators';

const _clone = (d) => JSON.parse(JSON.stringify(d));

@Component({
  selector: 'app-cliente',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClientesListaComponent implements OnInit {

  editing = {};
  rows = [];
  rowsFilter = [];
  rowsExp = [];
  rowsSort = [];
  temp = [];
  expanded: any = {};
  timeout: any;

  rowsSel = [];
  selected = [];

  columns = [
      { prop: 'cliNombre', name: 'Nombre' },
      { prop: 'cliMail', name: 'Correo Electrónico' },
      { prop: 'cliTelefono' , name: 'Teléfono' },
      { prop: 'cliEdad', name: 'Edad' }
  ];
  columnsSort = [
    { prop: 'cliNombre', name: 'Nombre' },
    { prop: 'cliMail', name: 'Correo Electrónico' },
    { prop: 'cliTelefono' , name: 'Teléfono' },
    { prop: 'cliEdad', name: 'Edad' }
  ];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('myTable') tableExp: any;

  constructor( public cliente: ClienteService) {
      console.log('aqui');
  }

  onPage(event) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
          console.log('paged!', event);
      }, 100);
  }
  toggleExpandRow(row) {
      console.log('Toggled Expand Row!', row);
      this.tableExp.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
      console.log('Detail Toggled', event);
  }


  updateValue(event, cell, rowIndex) {
      console.log('inline editing rowIndex', rowIndex)
      this.editing[rowIndex + '-' + cell] = false;
      this.rows[rowIndex][cell] = event.target.value;
      this.rows = [...this.rows];
      console.log('UPDATED!', this.rows[rowIndex][cell]);
  }

  ngOnInit() {
    this.cliente.buscarTodos()
    .pipe(take(1))
    .subscribe(res => {
        console.log(res);
        this.temp = res;
        this.rows = res;
        this.rowsFilter = res;
        this.rowsExp = res;
        this.rowsSort = res;
        this.rowsSel = res;
    });
  }

  updateFilter(event) {
      const val = event.target.value.toLowerCase();

      // filter our data
      const temp = this.temp.filter(function(d) {
          console.log(`${d.gender}`);

          return (d.cliNombre.toLowerCase().includes(val) ||
                  d.cliMail.toLowerCase().includes(val) ||
                  d.cliTelefono.toLowerCase().includes(val) ||
                  (d.cliEdad + '').toLowerCase().includes(val + '')
          )
      });

      // update the rows
      this.rowsFilter = temp;
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
  }

  // Selection


  onSelect({ selected }) {
      console.log('Select Event', selected, this.selected);

      this.selected.splice(0, this.selected.length);
      this.selected.push(...selected);
  }

  onActivate(event) {
      console.log('Activate Event', event);
  }

}
