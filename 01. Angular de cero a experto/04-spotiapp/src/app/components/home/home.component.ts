import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  nuevosLanzamientos: any[] = [];
  loading: boolean;
  fError: boolean;
  msjError: string;

  constructor(private _spotify: SpotifyService) {
    this.obtenerNuevosLanzamientos();
  }

  ngOnInit() {
  }

  obtenerNuevosLanzamientos() {
    this.loading = true;
    this.fError = false;

    this._spotify.ObtenerNuevosLanzamientos()
        .subscribe((data: any) => {
          this.nuevosLanzamientos = data;
          this.loading = false;
          this.fError = false;
        }, (error) => {
          this.loading = false;
          this.fError = true;
          this.msjError = `${error.error.error.status} - ${error.error.error.message}`;
        });
  }

}
