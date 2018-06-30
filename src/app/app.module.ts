//Core Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Formularios
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//Vistas y componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './Inicio/header/header.component';
import { FooterComponent } from './Inicio/footer/footer.component';
import { Page404Component } from './404/page404/page404.component';
import { UsuariosComponent } from './componente/usuarios/usuarios.component';
import { HomeComponent } from './Inicio/home/home.component';
import { RolesComponent } from './componente/roles/roles.component';
import { NavLoginComponent } from './componente/nav-login/nav-login.component';
import { AyudaComponent } from './componente/ayuda/ayuda.component';

//Services
import { UsuariosService } from './servicios/usuarios.service';
import { RolesService } from './servicios/roles.service';

 
 
const routes: Routes = [
  { path : '' , component: LoginComponent },
  { path : 'Home', component: HomeComponent },
  { path : 'Users', component: UsuariosComponent },
  { path : 'Roles', component: RolesComponent},
  { path: 'Help', component: AyudaComponent },
  { path : '**', component: Page404Component }
];
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component,
    UsuariosComponent,
    HomeComponent,
    RolesComponent,
    NavLoginComponent,
    AyudaComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ UsuariosService, RolesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
