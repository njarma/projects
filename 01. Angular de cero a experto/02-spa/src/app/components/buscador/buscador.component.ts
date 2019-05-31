import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { HeroesService, IHeroe  } from "../../Services/heroes.service";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  termino: string;
  heroes: IHeroe[];
  @Input() heroe: any;
  @Input() index: number;

  constructor(private _activatedRoute: ActivatedRoute,
			  private _heroesServices: HeroesService,
              private _router: Router) { }

  ngOnInit() {

    this._activatedRoute.params.subscribe( params => {
  
      this.termino = params['termino'];
	    this.heroes = this._heroesServices.buscarHeroes (this.termino);

    });
  }

  verHeroe() {
    console.log( `índice n° ${  this.index }` );
    this._router.navigate(['/heroe', this.index]);
  }

}
