import { Observable } from 'rxjs';

export interface Api<T> {
    guardar(arg: T): Observable<T>;
    guardarLista(arg: T[]): Observable<T[]>;
    actualizar(id: number, arg: T): Observable<T>;
    buscarPorId(id: number): Observable<T>;
    buscarTodos(): Observable<T[]>;
    eliminar(id: number): Observable<T>;
}