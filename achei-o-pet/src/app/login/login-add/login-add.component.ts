import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/Usuario';

@Component({
  selector: 'app-login-add',
  templateUrl: './login-add.component.html',
  styleUrls: ['./login-add.component.css']
})
export class LoginAddComponent implements OnInit {

  login = new Usuario();
  isLoadingResults = false;

  constructor(private api: LoginService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  criar(): void {
    this.isLoadingResults = true;

    if (this.login.email != null && this.login.email != "" &&
      this.login.senha != null && this.login.senha != "" &&
      this.login.nome != null && this.login.nome != "") {

      this.login.senha = btoa(this.login.senha);// passar para base64
      console.log(this.login);
      this.api.addUsuario(this.login)
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

  ngOnInit() {
  }

}
