import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DataModalComponent } from 'app/components/data-modal/data-modal.component';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [
    `
    .campo-error{
      border: 1px solid red
    }
    `
  ]
})
export class DataComponent {

  forma: FormGroup;

  public usuario: Object= {
    nombrecompleto: {
      nombre: 'Adrián',
      apellido: 'Canitano'
    },
    email: 'acanitano@gmail.com'
    , pasatiempos: ['Correr', 'Dormir', 'Comer']
  };

  constructor() {

    console.log(this.usuario);

    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
          'nombre': new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20),
                                          this.sinEspacio
                                          ]),
          'apellido': new FormControl('', Validators.required)
      })
      ,
      'email': new FormControl(this.usuario['email'] , [Validators.required,
                                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                    ]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ])
    });

    // Para inicializar el form con los datos del objeto usuario.
    // this.forma.setValue( this.usuario );

  }

  sinEspacio( control: FormControl ): { [s: string]: boolean } {

    if (/\s/g.test(control.value)){
      console.log('True');
      return{
        sinEspacio: true
      };
    }
    console.log('False');
    return null;
  }

  hasWhiteSpace(s) {
    return /\s/g.test(s);
  }

  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    );

  }

  onGuardar(){

    console.log( this.forma.value );
    console.log( this.forma);

    // Para resetear el objeto en el formulario.

    this.forma.reset({
      nombrecompleto: {
        nombre: '',
        apellido: ''
      },
      email: ''
    });

    // o para resetar por campos
    /*this.forma.get('nombrecompleto.nombre').setValue('');
    this.forma.get('nombrecompleto.apellido').setValue('');
    this.forma.controls['email'].setValue('');*/

  }

}
