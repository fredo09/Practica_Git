import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor() { }
  roles :any = [
    {
      id : 1,
      nickname: "TortyMax",
      rol: "Diseñador"
    },
    {
      id : 2,
      nickname: "Beto-Camelo",
      rol: "Contador"
    },
    {
      id : 3,
      nickname: "Giolo69",
      rol: "Administrador"
    },
    {
      id : 4,
      nickname: "Fire_of_machine",
      rol: "Programador"
    }
  ]

  getRoles(){
    //retornamos el JSON de roles
    return this.roles;
  }
}
