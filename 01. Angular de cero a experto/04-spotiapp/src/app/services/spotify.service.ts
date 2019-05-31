import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _hhtp: HttpClient) { 
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBYuENDvgysG42Qhe3feLOX-YAG5rgnvtDj7m6xDy6Gg7LVoMzwZGA4-vap_07ckDExXNl1zYemvzctYtc'
    });

    return this._hhtp.get(url, {headers});
  }

  ObtenerNuevosLanzamientos() {
    return this.getQuery('browse/new-releases')
    //return this._hhtp.get('https://api.spotify.com/v1/browse/new-releases', { headers: this.headers })
      .pipe( map(data => data['albums'].items ));
  
  }

  BuscarArtistas( termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=20&offset=5`)
    //return this._hhtp.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=20&offset=5`, { headers: this.headers })
      .pipe( map(data => data['artists'].items ));
  }

  ObtenerArtista (artistaId: string) {
    return this.getQuery(`artists/${ artistaId }`);
  }

  ObtenerTopTracks (artistaId: string) {
    return this.getQuery(`artists/${ artistaId }/top-tracks?country=ES`)
    .pipe( map(data => data['tracks']) );
  }
}