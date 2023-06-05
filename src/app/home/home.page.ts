import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public alertButtons = ['OK'];

  nombre: string = "";
  apellido: string = "";
  email: string = "";
  nivelEstudios: string = "";
  fechaNacimiento: string = "";

  constructor(private activerouter: ActivatedRoute, private router: Router, private alertController: AlertController) { }

  registrar(){
    if(this.nombre.valueOf()!="" || this.apellido.valueOf()!="" || this.email.valueOf()!=""|| this.nivelEstudios.valueOf()!="" || this.fechaNacimiento.valueOf()!=""){
      let navigationExtras: NavigationExtras ={
        state: {
          nombre: this.nombre,
          apellido: this.apellido,
          email: this.email,
          nivelEstudios: this.nivelEstudios,
          fechaNacimiento: this.fechaNacimiento
        }
      };

      this.presentAlert("Bienvenid@ "+ this.nombre+ " " + this.apellido+ " a SkeletonApp");

      this.router.navigate(['/profile'], navigationExtras)
    }
    else{
      this.presentAlert("Complete todos los datos porfavor");
    }
  }

  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Saludos!',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
