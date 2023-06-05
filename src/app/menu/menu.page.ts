import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  usuarioHome: string = "";

  nombre: string = "Usuario";
  apellido: string = "Prueba";
  email: string = "usuario@mail.cl";
  nivelEstudios: string = "Universario";
  fechaNacimiento: string = "1992-06-08";

  constructor(private activerouter: ActivatedRoute, private router: Router){
    this.activerouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.usuarioHome = this.router.getCurrentNavigation()?.extras?.state?.['user'];
      }
      else{
        this.usuarioHome = "usuario@mail.cl";
      }
    })  
  }

  perfil(){
    let navigationExtras: NavigationExtras ={
      state: {
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
        nivelEstudios: this.nivelEstudios,
        fechaNacimiento: this.fechaNacimiento
      }
    };

    this.router.navigate(['/profile'], navigationExtras)
  }  
  

  ngOnInit() {
  }

}
