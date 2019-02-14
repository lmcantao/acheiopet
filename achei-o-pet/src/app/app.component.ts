import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pet';



  constructor(private router: Router) { }

  navigate(menu: string) {
    if (menu === 'home') {
      this.router.navigate(['/home']);
    } else if (menu === 'evento') {
      this.router.navigate(['/evento']);
    } else if (menu === 'usuario') {
      this.router.navigate(['/usuario']);
    } else if (menu === 'perfil') {
      this.router.navigate(['/usuario/perfil']);
    } else if (menu === 'criar-evento') {
      this.router.navigate(['/usuario/criar-evento']);
    } else if (menu === 'login') {
      this.router.navigate(['/login']);
    } else if (menu === 'logout') {
      this.logout();
    }
  }

  logado(): boolean {
    const token = localStorage.getItem('tokenUsuarioPet');
    const id = localStorage.getItem('idUsuarioPet');
    if (token == null || id == null || token == "" || id == "") {
      return false;
    }
    return true;
  }

  ngOnInit() {
    this.router.navigate(["home"]);
  }

  logout() {
    localStorage.setItem("tokenUsuarioPet", "");
    localStorage.setItem("idUsuarioPet", "");
    this.router.navigate(['/home']);
  }
}
