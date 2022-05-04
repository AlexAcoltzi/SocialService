import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth/auth.service';
import { EditarService } from 'app/Services/editar.service';
import { ConsultasService } from 'app/Services/consultas.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {
  image:any;
  userLogged=this.authService.getUserLogged();
  constructor(private authService: AuthService,private  _router: Router, private ajax:EditarService, private consultaService: ConsultasService) { }
  public data:any; // variable para almacenar los datos del usuario
  public nombre:String = ""; // variable para almacenar el nombre completo del susario
  public matricula:String="";

  ngOnInit(): void {
    this.data = this.consultaService.getData(); // En este apartado obtenemos el objeto JSON con los datos del usuario
    console.log(this.data);
    this.nombre = this.data.nombre +" " + this.data.paterno + " " + this.data.materno; // Almacenando el nombre del usuario
  this.matricula = this.data.matricula;
  }
  configurar(): void{
 
    this._router.navigateByUrl('/editar-perfil')
   
  
}

cambiarImagen(event:any){
  console.log("NNNN");

  this.image = this.ajax.updateFoto(event,this.matricula);
  console.log(this.matricula);


}

}