import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
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

  constructor() {

    this.forma = new FormGroup({
      'nombre': new FormControl('Adrián', [Validators.required, Validators.minLength(6), Validators.maxLength(20),
                                          this.sinEspacio
                                          ]),
      'apellido': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required,
                                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                    ])
    })

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

  onGuardar(){

    console.log( this.forma.value );
    console.log( this.forma);

  }

}
