import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor(private _activatedRoute: ActivatedRoute,
              private _spotify: SpotifyService) { 
    this._activatedRoute.params.subscribe(params => {
      console.log(`El parámetro recibido es: ${ params['id'] }`);
      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );
    });

  }

  ngOnInit() {
  }

  getArtista(artistaId: string) {
    this.loading = true;
    this._spotify.ObtenerArtista( artistaId )
      .subscribe(data => {
        this.artista = data;
        this.loading = false;
      });
  }

  getTopTracks (artistaId: string) {
    this._spotify.ObtenerTopTracks( artistaId )
      .subscribe(data => {
        console.log('el array es:');
        this.topTracks = data;
        console.log(this.topTracks);
      });
  }

}
