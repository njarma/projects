import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    mostrar:boolean = false;
    
    frase: any = {
        mensaje: 'Nunca te rindas sin dar lucha',
        autor: 'Pepe'
    }

    muebles: string[] = ['mesa','silla','escritorio'];
}