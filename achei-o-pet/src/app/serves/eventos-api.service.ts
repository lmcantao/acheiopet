import { Encontrado } from './../busca-encontrados/encontrado/encontrado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosApiService {

  private eventos: any[] = [
    {id: 1, nome: 'Bob', local: 'Ituiutaba'},
    {id: 2, nome: 'Xodo', local: 'Ituiutaba'},
    {id: 3, nome: 'Pitucha', local: 'Ituiutaba'}
  ]

  getEventos(){
    return this.eventos;

  }

  getEventoPorId(id: number){
    for (let i = 0; i < this.eventos.length;i++) {
     let evento = this.eventos[i];
      if (evento.id == id) {
        return evento;
      }
      
    }
    return null;
 }

 private readonly apiEncontrado = 'http://192.168.51.27:8089/pet/evento/encontrado';
 private readonly apiPerdido = 'http://192.168.51.27:8089/pet/evento/perdido';
  
  constructor(private http: HttpClient) { }

  urlEncontrado() {
    return this.http.get<Encontrado[]>(this.apiEncontrado);
  }

  urlPerdido() {
    return this.http.get<Encontrado[]>(this.apiPerdido);
  }
}
