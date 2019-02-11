import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioApiService {

  getUsuarios(){
    return[
      {id: 1, nome: 'Laressa'},
      {id: 2, nome: 'Samuel'},
    ];
  }

  getUsuarioPorId(id: number){
    let usuarios = this.getUsuarios();
    for(let i=0; i<usuarios.length;i++){
      let usuario = usuarios[i];
      if(usuario.id == id){
        return usuario;
      }
    }
    return null;
  }
  constructor() { }
}
