import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="this.tamanio">
      Esto es una etiqueta
    </p>

    <button class="btn btn-primary" (click)="this.tamanio = this.tamanio + 5">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="this.tamanio = this.tamanio - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

/*También se pueden utilizar:
  <p [style.fontSize]="'10px'">
  <p [ngStyle]="{ 'font-size': '10px', 'color': 'red' }"> */

  tamanio = 100;

  constructor() { }

  ngOnInit() {
  }

}
