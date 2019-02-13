import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventoComponent } from './evento/evento.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginAddComponent } from './login/login-add/login-add.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { PerfilComponent } from './usuario/perfil/perfil.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'evento',
    component: EventoComponent,
    data: { title: 'Lista de Eventos' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Lista de Eventos' },
  },
  {
    path: 'login-add',
    component: LoginAddComponent,
    data: { title: 'Lista de Eventos' },
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    data: { title: 'Lista de UsuarioEventos' },
    canActivate: [AuthGuardService],
  },
  {
    path: 'usuario/perfil',
    component: PerfilComponent,
    data: { title: 'Perfil Usuario' },
    canActivate: [AuthGuardService],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
