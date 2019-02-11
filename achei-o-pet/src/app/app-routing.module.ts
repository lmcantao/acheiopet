import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EventosComponent } from './eventos/eventos.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { EncontradoComponent } from './busca-encontrados/encontrado/encontrado.component';
import { PerdidoComponent } from './busca-perdidos/perdido/perdido.component';
import { EventoAddComponent } from './eventos/evento-add/evento-add.component';
import { EventoEditComponent } from './eventos/evento-edit/evento-edit.component';
import { UsuarioAddComponent } from './usuario/usuario-add/usuario-add.component';
import { UsuarioEditComponent } from './usuario/usuario-edit/usuario-edit.component';
import { EventoDetalheComponent } from './eventos/evento-detalhe/evento-detalhe.component';
import { UsuarioDetalheComponent } from './usuario/usuario-detalhe/usuario-detalhe.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'usuarios',
    component: UsuarioComponent,
  },

  {
    path: 'eventos',
    component: EventosComponent,
    canActivate: [AuthGuardService],
  },
  
  {
    path: 'encontrados',
    component: EncontradoComponent
  },

  {
    path: 'perdidos',
    component: PerdidoComponent
  },

  //EVENTOS

  {
    path: 'evento-add',
    component: EventoAddComponent
  },
 
  {
    path: 'evento-edit',
    component: EventoEditComponent
  },

  {
    path: 'evento-detalhe',
    component: EventoDetalheComponent
  },

  //USUARIOS
  {
    path: 'usuario-add',
    component: UsuarioAddComponent
  },

  {
    path: 'usuario-edit',
    component: UsuarioEditComponent
  },

  {
    path: 'usuario-detalhe',
    component: UsuarioDetalheComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
