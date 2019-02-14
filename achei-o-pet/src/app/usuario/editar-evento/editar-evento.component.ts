import { Component, OnInit, Input } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Evento } from 'src/app/shared/Evento';
import { Telefone } from 'src/app/shared/Telefone';
import { FiltroEvento } from 'src/app/shared/FiltroEvento';
import { TipoPet } from 'src/app/shared/TipoPet';
import { Pet } from 'src/app/shared/Pet';
import { TipoRaca } from 'src/app/shared/TipoRaca';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css']
})
export class EditarEventoComponent implements OnInit {

  @Input() evento = new Evento();
  @Input() telefone = new Telefone();

  telefones: Telefone[] = [];
  filtroEvento = new FiltroEvento();
  tipoPet: TipoPet[] = [];
  pet = new Pet();
  tipoRacas: TipoRaca[] = [];
  isLoadingResults = true;

  constructor(private api: EventoService, private router: Router, private route: ActivatedRoute,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.api.getEventoId(this.route.snapshot.params['id'])
      .subscribe((evento: Evento) => {
        this.evento = evento;
        console.log(evento);
      });
  }

}
