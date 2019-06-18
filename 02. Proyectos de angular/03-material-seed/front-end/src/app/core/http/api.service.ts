import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Api } from './api.model';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService<T> implements Api<T> {

  constructor(
    protected http: HttpClient,
    protected resource: string
  ) {}

  public guardar(arg: T): Observable<T> {
    return this.http.post<T>(this.resource, arg);
  }

  public guardarLista(arg: T[]): Observable<T[]> {
    return this.http.post<T[]>(this.resource, arg);
  }

  public actualizar(id: number, arg: T): Observable<T> {
    return this.http.put<T>(`${ this.resource }/${ id }`, arg);
  }

  public buscarPorId( id: number ): Observable<T> {
    return this.http.get<T>(`${ this.resource }/${ id }`);
  }

  public buscarTodos(): Observable<T[]> {
    return this.http.get<T[]>(this.resource );
  }

  public eliminar(id: number): Observable<T> {
    return this.http.delete<T>(`${ this.resource }/${ id }`);
  }
/*
  private crearOptions(cuerpo: T) {
    const options = {
      headers: environment.headerOptions,
      body: cuerpo
    };

    return options;
  }

  private GetFullUrl() {
    return `${ this.GetResourceUrl() }${ this.resource }`;
  }

  private GetResourceUrl() {
    return environment.ambientes[environment.ambientes.seleccionado].apiUrlBase;
  } */

}