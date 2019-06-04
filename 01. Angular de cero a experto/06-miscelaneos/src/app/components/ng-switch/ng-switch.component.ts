import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {

  alerta = 'dark';

  colores =  ['primary', 'red', 'dark', 'warning', 'info', 'success'];

  constructor() { }

  ngOnInit() {
  }

  random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

}
