import { Component, OnInit } from '@angular/core';
import { User } from '../shared/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user:  User = new User();

  constructor( private router: Router) { }

  ngOnInit() {
  }

  login(): void{
    if(this.user.nome ==='admin' && this.user.senha === '123456'){
      localStorage.setItem('usuarioLogado', 'laressa');
      this.router.navigate(['']);
    }else{
      alert("Credenciais inválidas");
    }
  }
}
