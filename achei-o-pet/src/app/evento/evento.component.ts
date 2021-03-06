import { Component, OnInit } from '@angular/core';
import { FiltroEvento } from '../shared/FiltroEvento';
import { ActivatedRoute } from '@angular/router';
import { Evento } from '../shared/Evento';
import { EventoService } from '../services/evento.service';
import { from } from 'rxjs';
import { TipoPet } from '../shared/TipoPet';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Pet } from '../shared/Pet';
import { TipoRaca } from '../shared/TipoRaca';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  filtroEvento = new FiltroEvento();
  tipoPet: TipoPet[] = [];
  pet = new Pet();
  tipoRacas: TipoRaca[] = [];
  local: string[] = [];
  Evento: Evento[] = [];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  isLoadingResults = true;
  constructor(private api: EventoService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.filtroEvento.tipoEvento = params["tipoEvento"];
    });
  }

  getEvento() {
    this.filtroEvento.local = this.myControl.value;
    this.api.getEvento(this.filtroEvento).subscribe((dados: Evento[]) => {
      this.Evento = dados;
      console.log(this.Evento);
      function sayHi() {
        alert('Hello');
      }
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
    });
  }

  getRacas(int: number) {
    this.pet.idTipo = int;
    console.log(this.pet.idTipo);
    this.api.getRacas(this.pet).subscribe((dados: TipoRaca[]) => {
      this.tipoRacas = dados;
      console.log(this.Evento);
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
      this.filtroEvento.idPet = pet.id;
      console.log(this.filtroEvento);
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

  getLocal() {
    this.api.getLocal().subscribe(local => {
      this.local = local;
      console.log(this.local);
      function sayHi() {
        alert('Hello');
      }
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
    this.getEvento();
    this.getTipoPet();
    this.getLocal();

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.local.filter(option => option.toLowerCase().includes(filterValue));
  }

}
