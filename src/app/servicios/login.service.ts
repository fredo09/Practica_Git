import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
      email = "admin@correo.com";
      password = "123";
      auth = false;
   
  constructor() { }
  validar(email,passowrd){
    if(this.email == email && this.password == passowrd){
       return this.auth = true;
    }else{
       return this.auth = false;
    }
  }
  
}
