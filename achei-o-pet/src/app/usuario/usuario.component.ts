import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { UsuarioAuth } from '../shared/UsuarioAuth';
import { Evento } from '../shared/Evento';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  auth = new UsuarioAuth();
  Evento: Evento[] = [];
  isLoadingResults = true;

  constructor(private api: UsuarioService, private route: ActivatedRoute) { }

  getUsuarioEvento() {
    this.api.usuarioEvento(this.auth).subscribe((dados: Evento[]) => {
      this.Evento = dados;
      console.log(this.Evento);
      function sayHi() {
        alert('Hello');
      }
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
    });
  }

  deletaEvento(id: number) {
    this.api.deleteEvento(id)
      .subscribe(() => {
        this.getUsuarioEvento();
      }, (err) => {
        console.log(err);
      }
      );
  }



  ngOnInit() {
    this.auth.id = Number(localStorage.getItem("idUsuarioPet"));
    this.auth.token = localStorage.getItem("tokenUsuarioPet");
    this.getUsuarioEvento();
  }
}
