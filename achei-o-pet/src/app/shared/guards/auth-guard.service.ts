import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';;

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem('tokenUsuarioPet');
    const id = localStorage.getItem('idUsuarioPet');
    console.log(id + token);
    if (token == null && id == null || token == "" && id == "") {
      //this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
