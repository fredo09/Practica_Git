import { Component, OnInit , ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('formpro') formpro: NgForm;
  //Atributos
  public email:String;
  public password:String;
  public auth_view : boolean;
  constructor(private loginService: LoginService, private router:Router ) { }
  onSubmit(){
    this.email = this.formpro.value.email;
    this.password = this.formpro.value.password;
    if(this.loginService.validar(this.email,this.password)){
     this.auth_view = true; 
    this.router.navigate(['Home']);
    alert('Se a comprobado las credenciales');
    }else{
      confirm("Error en Credenciales");
      this.auth_view = false; 
    }
  }

  isAuth(){
    if(this.auth_view){
      return this.auth_view;
    }else{
      return this.auth_view;
    }
  }
  ngOnInit() {
  }

}
