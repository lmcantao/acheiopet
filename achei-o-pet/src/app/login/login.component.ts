import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../shared/Usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Usuario();
  isLoadingResults = false;

  constructor(private api: LoginService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  logar(): void {
    this.isLoadingResults = true;

    if (this.login.email != null && this.login.email != "" && this.login.senha != null && this.login.senha != "") {

      this.login.senha = btoa(this.login.senha);// passar para base64
      console.log(this.login);
      this.api.authUsuario(this.login)
        .subscribe(res => {
          console.log(res);
          const id = res.id;
          const token = res.token;
          localStorage.setItem("idUsuarioPet", String(id));
          localStorage.setItem("tokenUsuarioPet", token);
          this.isLoadingResults = false;
          this.router.navigate(['/usuario']);//mudar isso depois
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
    }
  }

  navigate(menu: string) {
    if (menu === 'add') {
      this.router.navigate(['/login-add']);
    }
  }

  ngOnInit() {
  }

}
