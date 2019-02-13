import { Component, OnInit } from '@angular/core';
import { UsuarioAuth } from 'src/app/shared/UsuarioAuth';
import { Usuario } from 'src/app/shared/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  auth = new UsuarioAuth();
  usuario = new Usuario();
  isLoadingResults = true;

  constructor(private api: UsuarioService, private route: ActivatedRoute) { }

  getUsuario() {
    this.api.getUsuario(this.auth).subscribe((dados: Usuario) => {
      this.usuario = dados;
      console.log(this.usuario);
      function sayHi() {
        alert('Hello');
      }
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
    });
  }

  updatePerfil() {
    this.api.updatePerfil(this.usuario).subscribe((usuario) => {
      this.usuario = usuario;
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
    this.auth.id = Number(localStorage.getItem("idUsuarioPet"));
    this.auth.token = localStorage.getItem("tokenUsuarioPet");
    this.getUsuario();
  }
}
