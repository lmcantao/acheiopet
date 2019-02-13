import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { UsuarioAuth } from '../shared/UsuarioAuth';
import { Evento } from '../shared/Evento';
import { Usuario } from '../shared/Usuario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrUsuarioEvento = "http://localhost:8089/pet/usuario/";
const apiUrlUsuarioDeleteEvento = "http://localhost:8089/pet/usuario/evento/";
const apiUrlUsuarioPerfil = "http://localhost:8089/pet/usuario/perfilUsuario";
const apiUrlUsuarioPerfilUpdate = "http://localhost:8089/pet/usuario/perfil";
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  usuarioEvento(usuario: UsuarioAuth): Observable<Evento[]> {
    return this.http.post<Evento[]>(apiUrUsuarioEvento, usuario, httpOptions).pipe(
      tap(eventos => console.log('Meus Eventos' + eventos)),
      catchError(this.handleError('getUsuarioEventos', []))
    );
  }

  deleteEvento(id: number): Observable<any> {
    const url = `${apiUrlUsuarioDeleteEvento}${id}`;

    return this.http.delete(url, httpOptions).pipe(
      tap(result => console.log(result)),
      catchError(this.handleError<String>('deletaEvento'))
    );
  }

  getUsuario(auth: UsuarioAuth): Observable<Usuario> {
    return this.http.post<Usuario>(apiUrlUsuarioPerfil, auth, httpOptions).pipe(
      tap(usuario => console.log('busca o usuario' + usuario)),
      catchError(this.handleError<Usuario>('addFilmes'))
    );
  }

  updatePerfil(usuario: Usuario): Observable<Usuario> {
    return this.http.put(apiUrlUsuarioPerfilUpdate, usuario, httpOptions).pipe(
      tap(user => console.log(`editando usuario`)),
      catchError(this.handleError<any>('updateUsuarioe'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
