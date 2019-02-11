import { Component, OnInit } from '@angular/core';
import { EventosApiService } from '../serves/eventos-api.service';
import { User } from '../shared/User';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  private eventos: any[] = [];
  user: User;

  constructor(private eventosServe: EventosApiService) { }



  ngOnInit() {

  }
}
