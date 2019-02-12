import { Component, OnInit } from '@angular/core';
import { Encontrado } from './encontrado';
import { EventosApiService } from 'src/app/serves/eventos-api.service';


@Component({
  selector: 'app-encontrado',
  templateUrl: './encontrado.component.html',
  styleUrls: ['./encontrado.component.css']
})
export class EncontradoComponent implements OnInit {

   encontrado: Encontrado[];

  

  constructor(private servive: EventosApiService) {

    
   }

  ngOnInit() {
    this.servive.urlEncontrado().subscribe(dados => this.encontrado = dados);
  }




}
