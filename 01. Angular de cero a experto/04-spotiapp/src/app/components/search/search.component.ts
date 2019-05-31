import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading: boolean;

  constructor(private _spotify: SpotifyService) {}

  ngOnInit() {
  }

  buscar(termino: string) {
    if (termino) {
      this.loading = true;
      
      this._spotify.BuscarArtistas ( termino )
      .subscribe((data: any) => {
        this.loading = false;
        this.artistas = data;
        
      }); 
    }
  }

}
