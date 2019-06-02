import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { ListaItem } from 'src/app/models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem = '';

  constructor( public deseoService: DeseosService,
               private route: ActivatedRoute) {
      // Obtengo el id enviado como parámetro
      const listaId = this.route.snapshot.paramMap.get('listaId');
      this.lista = this.deseoService.obtenerLista(listaId);
   }

  ngOnInit() {
  }

  agregarItem() {
    if (this.nombreItem) {
      const nuevoItem = new ListaItem( this.nombreItem );
      this.lista.items.push( nuevoItem );
      this.nombreItem = '';
      this.deseoService.guardarStorage();
    }
  }

  cambioCheck( item: ListaItem ) {

    const pendientes = this.lista.items
                            .filter(data => !data.completado)
                            .length;
    // Para imprimir el resultado en forma de objeto
    // console.log({pendientes});

    if (pendientes === 0) {
      this.lista.TerminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.TerminadaEn = null;
      this.lista.terminada = false;
    }

    this.deseoService.guardarStorage();

    console.log( this.deseoService.listas );
  }

  borrarItem( i: number) {
    this.lista.items.splice( i, 1 );
    this.deseoService.guardarStorage();
  }

}
