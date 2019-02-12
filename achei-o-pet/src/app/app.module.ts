import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EventosComponent } from './eventos/eventos.component';
import { EventoFormComponent } from './eventos/evento-form/evento-form.component';
import { EventoDetalheComponent } from './eventos/evento-detalhe/evento-detalhe.component';
import { EncontradoComponent } from './busca-encontrados/encontrado/encontrado.component';
import { PerdidoComponent } from './busca-perdidos/perdido/perdido.component';
import { EventoAddComponent } from './eventos/evento-add/evento-add.component';
import { UsuarioAddComponent } from './usuario/usuario-add/usuario-add.component';
import { UsuarioEditComponent } from './usuario/usuario-edit/usuario-edit.component';
import { EventoEditComponent } from './eventos/evento-edit/evento-edit.component';
import { UsuarioDetalheComponent } from './usuario/usuario-detalhe/usuario-detalhe.component';
import { LoginApiService } from './serves/login-api.service';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
    HomeComponent,
    EventosComponent,
    EventoFormComponent,
    EventoDetalheComponent,
    EncontradoComponent,
    PerdidoComponent,
    EventoAddComponent,
    UsuarioDetalheComponent,
    UsuarioAddComponent,
    UsuarioEditComponent,
    EventoEditComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
