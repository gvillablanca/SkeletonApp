import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formularioHome: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formularioHome = this.fb.group({
      'nombreHome': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required)
    });
  }

  limpiarForm(){
    console.log("holitos");
    this.formularioHome["controls"]["nombreHome"].reset();
  }
}
