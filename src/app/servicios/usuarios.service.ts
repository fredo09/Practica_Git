import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }
  usuarios : any = [ 
    {
    nombre: 'Alfredo Vazquez',
    cif: 'B12345678',
    direccion: 'Paseo de la Castellana, 100',
    cp: '28.010',
    localidad: 'Madrid',
    provincia: 'Madrid',
    telefono: 911111111,
    email: 'info@telefonica.com'
    },
    {
      nombre: 'Maria Vazquez',
      cif: 'B12345678',
      direccion: 'Paseo de la Castellana, 100',
      cp: '28.010',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 911111111,
      email: 'info@telefonica.com'
      },
      {
        nombre: 'Pepe Jimenez',
        cif: 'B12345678',
        direccion: 'Paseo de la Castellana, 100',
        cp: '28.010',
        localidad: 'Madrid',
        provincia: 'Madrid',
        telefono: 911111111,
        email: 'info@telefonica.com'
        },
        {
          nombre: 'Maria Guzman',
          cif: 'B12345678',
          direccion: 'Paseo de la Castellana, 100',
          cp: '28.010',
          localidad: 'Madrid',
          provincia: 'Madrid',
          telefono: 911111111,
          email: 'info@telefonica.com'
          },
          {
            nombre: 'Maria Hernandez',
            cif: 'B12345678',
            direccion: 'Paseo de la Castellana, 100',
            cp: '28.010',
            localidad: 'Madrid',
            provincia: 'Madrid',
            telefono: 911111111,
            email: 'info@telefonica.com'
            }
    ]

  getUsuarios(){
    //retornando el array de usuarios
    return this.usuarios;
    //eturn 'Mensaje desde el servicio para usuarios';
    }
}
