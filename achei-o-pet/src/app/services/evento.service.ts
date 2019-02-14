import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { FiltroEvento } from '../shared/FiltroEvento';
import { Evento } from '../shared/Evento';
import { TipoPet } from '../shared/TipoPet';
import { Pet } from '../shared/Pet';
import { TipoRaca } from '../shared/TipoRaca';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrlEvento = "http://localhost:8089/pet/evento";
const apiUrlLocal = "http://localhost:8089/pet/evento/local";
const apiUrlTipoPet = "http://localhost:8089/pet/tipopet";
const apiUrlRacas = "http://localhost:8089/pet/pet";
const apiUrlPet = "http://localhost:8089/pet/pet/id";
const apiUrlEventoAdd = "http://localhost:8089/pet/usuario/evento";
const apiUrlEventoId = "http://localhost:8089/pet/usuario/evento";

@Injectable({
  providedIn: 'root'
})

export class EventoService {

  constructor(private http: HttpClient) { }

  addEvento(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(apiUrlEventoAdd, evento, httpOptions).pipe(
      tap(eve => console.log('salvar evento' + eve)),
      catchError(this.handleError<Evento>('AddEvento'))
    );
  }

  getEvento(filtro: FiltroEvento): Observable<Evento[]> {
    return this.http.post<Evento[]>(apiUrlEvento, filtro, httpOptions).pipe(
      tap(pet => console.log('Meus Pets' + pet)),
      catchError(this.handleError('getPet', []))
    );
  }

  getEventoId(id: number): Observable<Evento> {
    const url = `${apiUrlEventoId}/${id}`;
    return this.http.get<Evento>(url).pipe(
      tap(eve => console.log(`busca evento pelo id=${id}`)),
      catchError(this.handleError<Evento>(`busca evento por id=${id}`))
    );
  }

  getTipoPet(): Observable<TipoPet[]> {
    return this.http.get<TipoPet[]>(apiUrlTipoPet).pipe(
      tap(tipoPet => console.log('Meus Tipos' + tipoPet)),
      catchError(this.handleError('getTipoPet', []))
    );
  }

  getRacas(idPet: Pet): Observable<TipoRaca[]> {
    return this.http.post<TipoRaca[]>(apiUrlRacas, idPet, httpOptions).pipe(
      tap(raca => console.log('Minhas Racas' + raca)),
      catchError(this.handleError('getRaca', []))
    );
  }

  getPet(idPet: Pet): Observable<Pet> {
    return this.http.post<Pet>(apiUrlPet, idPet, httpOptions).pipe(
      tap(pet => console.log('busca o pet' + pet)),
      catchError(this.handleError<Pet>('buscaPet'))
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
