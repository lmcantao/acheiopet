import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

 
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean{
    const token = localStorage.getItem('usuarioLogado');
    if(token !== "laressa"){
      alert('Faça o Login antes de cadastrar evento');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
