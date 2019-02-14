import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/shared/Evento';
import { EventoService } from 'src/app/services/evento.service';
import { Telefone } from 'src/app/shared/Telefone';
import { FiltroEvento } from 'src/app/shared/FiltroEvento';
import { TipoPet } from 'src/app/shared/TipoPet';
import { Pet } from 'src/app/shared/Pet';
import { TipoRaca } from 'src/app/shared/TipoRaca';

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.component.html',
  styleUrls: ['./criar-evento.component.css']
})
export class CriarEventoComponent implements OnInit {


  @Input() evento = new Evento();
  @Input() telefone = new Telefone();

  telefones: Telefone[] = [];
  filtroEvento = new FiltroEvento();
  tipoPet: TipoPet[] = [];
  pet = new Pet();
  tipoRacas: TipoRaca[] = [];
  isLoadingResults = true;
  constructor(private api: EventoService, private router: Router) {
  }

  addEvento() {
    this.telefones.push(this.telefone);
    this.evento.telefone = this.telefones;
    console.log(this.evento);
    this.evento.id_usuario = Number(localStorage.getItem("idUsuarioPet"));
    this.api.addEvento(this.evento).subscribe((resultado) => {
      this.router.navigate['/usuario/criar-evento'];
    }, (err) => {
      console.log(err);
    });
  }

  getRacas(int: number) {
    this.pet.idTipo = int;
    console.log(this.pet.idTipo);
    this.api.getRacas(this.pet).subscribe((dados: TipoRaca[]) => {
      this.tipoRacas = dados;

      function sayHi() {
        alert('Hello');
      }
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
    });
  }

  getPet(int: number) {
    this.pet.idRaca = int;
    this.api.getPet(this.pet).subscribe((pet: Pet) => {
      this.evento.id_pet = pet.id;
      console.log(this.evento);
      function sayHi() {
        alert('Hello');
      }
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
    });
  }

  getTipoPet() {
    this.api.getTipoPet().subscribe(tipoPet => {
      this.tipoPet = tipoPet;
      console.log(this.tipoPet);
      function sayHi() {
        alert('Hello');
      }
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
    });
  }


  salvarTipoEvento(tipoEvento: string) {
    this.evento.tipo_evento = tipoEvento;
    console.log(this.evento);
  }

  ngOnInit() {
    this.getTipoPet();
  }

}
