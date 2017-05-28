import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'app/utils/modal/modal.component';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-data-modal',
  templateUrl: './data-modal.component.html',
  styles: [`
  .campo-error{
    border: 1px solid red
  }`]
})

export class DataModalComponent {

  @ViewChild('modal1') modal: ModalComponent;
  id: string;
  forma: FormGroup;

  constructor() {
    this.forma = new FormGroup({
      'nombre': new FormControl('', [
                                Validators.required,
                                Validators.minLength(6),
                                Validators.maxLength(20),
                                this.sinEspacio])
                              });
  }

  sinEspacio( control: FormControl ): { [s: string]: boolean } {

    if (/\s/g.test(control.value)) {
      console.log('True');
      return{
        sinEspacio: true
      };
    }
    return null;
  }

  onGuardar() {
    console.log( this.forma.value );
    console.log( this.forma);

  }

  public show(): void {
    this.modal.show();
  }

  public hide(): void {
    this.modal.hide();
  }

}
