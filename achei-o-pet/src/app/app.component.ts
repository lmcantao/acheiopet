import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pets';


  constructor(private router: Router){}

  navigate(home: string){
    if (home === '') {
      this.router.navigate(['']);
    } else if(home === 'perdidos'){
      this.router.navigate(['/perdidos']);
    }else if(home === 'encontrados'){
      this.router.navigate(['/encontrados']);
    }else if(home === 'login'){
      this.router.navigate(['/login']);
    }else if(home === 'usuarios'){
      this.router.navigate(['/usuarios']);
    }else if(home === 'eventos'){
      this.router.navigate(['/eventos']);
    }else if(home === 'logout'){
      this.logout();
    }
  }


  logout(){
    localStorage.setItem("usuarioLogado", "");
    this.router.navigate(['']);
  }
}
