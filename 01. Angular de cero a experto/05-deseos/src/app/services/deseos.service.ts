import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista [] = [];

  constructor() {
      this.obtenerStorage();
  }

  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
  }

  obtenerLista(id: string | number) {
    id = Number(id);
    return this.listas.find( listaData => listaData.id === id );
  }

  borrarLista( lista: Lista) {
    this.listas = this.listas.filter( data => data.id !== lista.id);
    this.guardarStorage();
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  obtenerStorage() {
    this.listas = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
  }

}
