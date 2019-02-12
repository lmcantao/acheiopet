import { Encontrado } from './../../busca-encontrados/encontrado/encontrado';
import { Component, OnInit } from '@angular/core';
import { EventosApiService } from 'src/app/serves/eventos-api.service';

@Component({
  selector: 'app-perdido',
  templateUrl: './perdido.component.html',
  styleUrls: ['./perdido.component.css']
})
export class PerdidoComponent implements OnInit {

  perdido: Encontrado[];

  constructor(private servive: EventosApiService) { }
  
  ngOnInit() {
    this.servive.urlPerdido().subscribe(dados => this.perdido = dados);
  }

}
