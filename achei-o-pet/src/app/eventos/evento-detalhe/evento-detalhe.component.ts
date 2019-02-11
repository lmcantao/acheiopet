import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosApiService } from 'src/app/serves/eventos-api.service';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.css']
})
export class EventoDetalheComponent implements OnInit {

  evento: any;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute,
    private eventosServe: EventosApiService, private router: Router) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.evento = this.eventosServe.getEventoPorId(id);
      }
    );
  }

  editarContato(){
    this.router.navigate(['/eventos',this.evento.id, 'editar']);
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
