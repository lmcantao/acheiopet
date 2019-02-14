import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatMenuModule, MatSidenavModule, MatListModule
} from "@angular/material";
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from "@angular/flex-layout";
import { EventoComponent } from './evento/evento.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginAddComponent } from './login/login-add/login-add.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { UsuarioComponent } from './usuario/usuario.component';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { CriarEventoComponent } from './usuario/criar-evento/criar-evento.component';
import { EditarEventoComponent } from './usuario/editar-evento/editar-evento.component';

@NgModule({
  declarations: [
    CriarEventoComponent,
    EditarEventoComponent,
    AppComponent,
    EventoComponent,
    HomeComponent,
    LoginComponent,
    LoginAddComponent,
    UsuarioComponent,
    PerfilComponent,
  ],
  imports: [
    MatAutocompleteModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatGridListModule,
    FlexLayoutModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }