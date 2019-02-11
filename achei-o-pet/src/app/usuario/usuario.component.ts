import { Component, OnInit } from '@angular/core';
import { UsuarioApiService } from '../serves/usuario-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(private usuarioServe: UsuarioApiService, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.usuarios = this.usuarioServe.getUsuarios();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  proximaPagina(){
    //this.pagina++;
    this.router.navigate(['/usuarios'], {queryParams:{'pagina': ++this.pagina}});
  }
}
