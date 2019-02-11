import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EventosApiService } from 'src/app/serves/eventos-api.service';

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.css']
})
export class EventoFormComponent implements OnInit {

  evento: any;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute, private eventosServe: EventosApiService) { }

  ngOnInit() {
    
  }

  ngOnDestroy(){
   
  }

}
