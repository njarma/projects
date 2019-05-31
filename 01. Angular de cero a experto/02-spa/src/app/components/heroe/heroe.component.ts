import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, IHeroe } from '../../Services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: IHeroe;
  constructor( private _activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService) {
     this._activatedRoute.params.subscribe( params => {
        //console.log( params);
        console.log( `el parámetro recibido es: ${ params['id'] }` );
        this.heroe = _heroesService.getHeroe(params['id']);
        console.log( this.heroe );
     });
   }

  ngOnInit() {
  }

}
