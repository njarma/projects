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

}
