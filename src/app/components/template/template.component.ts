import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent {

  constructor() { }

  usuario: Object = {
    nombre: 'Adrian',
    apellido: 'Canitano',
    email: 'acanitano@gmail.com',
    pais: 'ARG',
    sexo: 'Hombre',
    acepta: false
  };

  paises= [{codigo: 'ARG', descripcion: 'Argentina'},
    {codigo: 'ITA', descripcion: 'Italia'},
    {codigo: 'BRA', descripcion: 'Brasil'}];

  sexos: string[] = ['Hombre','Mujer','S/D'];

  guardar( formulario: NgForm ) {
    console.log( 'Formulario posteado:' );
    console.log( 'ngForm: ', formulario );
    console.log( 'Objeto Usuario: ', this.usuario );
    console.log( 'Valores enviados en el ngForm: ', formulario.value );
  }

}
