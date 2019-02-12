import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { EventosComponent } from '../eventos/eventos.component';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  private userAutenticado: boolean  = false;


  constructor(private router: Router) { }


}
