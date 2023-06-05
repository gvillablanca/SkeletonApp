import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  nombre: string = "";
  apellido: string = "";
  email: string = "";
  nivelEstudios: string = "";
  fechaNacimiento: string = "";

  constructor(private activerouter: ActivatedRoute, private router: Router){
    this.activerouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.nombre = this.router.getCurrentNavigation()?.extras?.state?.['nombre'];
        this.apellido = this.router.getCurrentNavigation()?.extras?.state?.['apellido'];
        this.email = this.router.getCurrentNavigation()?.extras?.state?.['email'];
        this.nivelEstudios = this.router.getCurrentNavigation()?.extras?.state?.['nivelEstudios'];
        this.fechaNacimiento = this.router.getCurrentNavigation()?.extras?.state?.['fechaNacimiento'];
      }
      else{
        this.nombre = "Usuario";
        this.apellido = "Prueba";
        this.email = "usuario@mail.cl";
        this.nivelEstudios = "Universario";
        this.fechaNacimiento = "1992-06-08";
      }
    })  
  }

  ngOnInit() {
  }

}
