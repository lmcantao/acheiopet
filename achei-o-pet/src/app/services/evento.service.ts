import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { FiltroEvento } from '../shared/FiltroEvento';
import { Evento } from '../shared/Evento';
import { TipoPet } from '../shared/TipoPet';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrlEvento = "http://192.168.51.27:8089/pet/evento";
const apiUrlLocal = "http://192.168.51.27:8089/pet/evento/local";
const apiUrlTipoPet = "http://192.168.51.27:8089/pet/tipopet";

@Injectable({
  providedIn: 'root'
})

export class EventoService {

  constructor(private http: HttpClient) { }

  getEvento(filtro: FiltroEvento): Observable<Evento[]> {
    return this.http.post<Evento[]>(apiUrlEvento, filtro, httpOptions).pipe(
      tap(pet => console.log('Meus Pets' + pet)),
      catchError(this.handleError('getPet', []))
    );
  }

  getTipoPet(): Observable<TipoPet[]> {
    return this.http.get<TipoPet[]>(apiUrlTipoPet).pipe(
      tap(tipoPet => console.log('Meus Tipos' + tipoPet)),
      catchError(this.handleError('getTipoPet', []))
    );
  }

  getLocal(): Observable<string[]> {
    return this.http.get<string[]>(apiUrlLocal).pipe(
      tap(local => console.log('Locais' + local)),
      catchError(this.handleError('getTipoPet', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
