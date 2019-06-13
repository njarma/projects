import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ClienteService } from '../../../core/services/cliente.service';

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
      { prop: 'name', name: 'Nombre' },
      { prop: 'company', name: 'Empresa' },
      { prop: 'gender' , name: 'Género' },
      { prop: 'age', name: 'Edad' }
  ];
  columnsSort = [
      { prop: 'name', name: 'Nombre' },
      { prop: 'company', name: 'Empresa' },
      { prop: 'gender', name: 'Género' },
      { prop: 'age', name: 'Edad' }
  ];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('myTable') tableExp: any;

  constructor( public cliente: ClienteService) {
        this.cliente.buscarTodos().subscribe(res => {
            console.log(res);
        });

      this.fetch((data) => {
          // cache our list
          this.temp = _clone(data);

          this.rows = _clone(data);;
          this.rowsFilter = _clone(data);;
          this.rowsExp = _clone(data);
          this.rowsSort = _clone(data);
          this.rowsSel = _clone(data);

      });

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

  fetch(cb) {
      const req = new XMLHttpRequest();
      req.open('GET', `assets/company.json`);

      req.onload = () => {
          cb(JSON.parse(req.response));
      };

      req.send();
  }

  updateValue(event, cell, rowIndex) {
      console.log('inline editing rowIndex', rowIndex)
      this.editing[rowIndex + '-' + cell] = false;
      this.rows[rowIndex][cell] = event.target.value;
      this.rows = [...this.rows];
      console.log('UPDATED!', this.rows[rowIndex][cell]);
  }

  ngOnInit() {

  }

  updateFilter(event) {
      const val = event.target.value.toLowerCase();

      // filter our data
      const temp = this.temp.filter(function(d) {
          console.log(`${d.gender}`);
          // return (d.name.toLowerCase().indexOf(val) !== -1 || !val)  ;
          return (d.name.toLowerCase().includes(val) ||
                  d.gender.toLowerCase().includes(val) ||
                  d.company.toLowerCase().includes(val) ||
                  (d.age + '').toLowerCase().includes(val + '')
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
