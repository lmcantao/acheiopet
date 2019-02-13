import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  navigate(tipo: string) {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "tipoEvento": tipo
      }
    };
    this.router.navigate(["/evento"], navigationExtras);

  }

  ngOnInit() {
  }

}
