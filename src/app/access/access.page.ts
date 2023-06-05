import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
})
export class AccessPage implements OnInit {

  usuario: string = "";
  clave: string = "";

  constructor(private toastController: ToastController,private router: Router, private alertController: AlertController) {}

  logeado(){
      if(this.validarCredenciales(this.usuario, this.clave)){
        let navigationExtras: NavigationExtras ={
          state: {
            user: this.usuario,
            pass: this.clave
          }
        };
        this.router.navigate(['/menu'], navigationExtras)
      }     
  }

  validarCredenciales(user:string, pass:string){
    if(user.length <3 && user.length >18){
      this.presentAlert("Nombre de usuario debe ser mayor a 3 y menor a 8 caracteres");
      return false;
    } 
    else if(user.valueOf()=="" || pass.valueOf()==""){
      this.presentAlert("Complete todos los campos porfavor");
      return false;
    }
    else if(pass.length >4 ){
      this.presentAlert("contraseña debe ser numerica y no mas de 4 digitos");
      return false;
    }
    else{
      return true;
    }
  }

  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }
}
