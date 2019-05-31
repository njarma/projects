import { Component, OnInit } from '@angular/core';
import { HeroesService, IHeroe } from '../../Services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes:IHeroe[] = [];
  constructor(  private _heroesServices: HeroesService,
                private _router: Router
    ){
    }

  ngOnInit() {
    this.heroes = this._heroesServices.getHeroes();
    //console.log(this.heroes);
  }
  
  //Función para navegar hacia una página, enviando el índice
  verHeroe( idx: number) {
    //console.log( `índice n° ${  idx }` );
    this._router.navigate(['/heroe', idx]);
  }
}
