import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Usuario } from '../shared/Usuario';
import { UsuarioAuth } from '../shared/UsuarioAuth';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrAuth = "http://192.168.51.27:8089/pet/usuario/authentication";
const apiUrlAddUsuario = "http://192.168.51.27:8089/pet/usuario/perfil";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  authUsuario(usuario: Usuario): Observable<UsuarioAuth> {
    return this.http.post<UsuarioAuth>(apiUrAuth, usuario, httpOptions).pipe(
      tap(usuario => console.log("Passando Usuario" + usuario)),
      catchError(this.handleError<UsuarioAuth>('postUsuario'))
    );
  }

  addUsuario(usuario: Usuario): Observable<UsuarioAuth> {
    return this.http.post<UsuarioAuth>(apiUrlAddUsuario, usuario, httpOptions).pipe(
      tap(usuario => console.log("Add Usuario" + usuario)),
      catchError(this.handleError<UsuarioAuth>('postAddUsuario'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
