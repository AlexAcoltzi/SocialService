import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth/auth.service';
import { ConsultasService } from 'app/Services/consultas.service';
import { first, pipe } from 'rxjs';




@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {
  private image:any;
  userLogged=this.authService.getUserLogged();
  constructor(private authService: AuthService,private  _router: Router,private ajax:ConsultasService) { }

  ngOnInit(): void {
  }
  configurar(): void{
 
    this._router.navigateByUrl('/editar-perfil')
   
  
}

cambiarImagen(event:any):void{
  this.image = <File>event.target.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(this.image);
  reader.onload = function () {
    console.log('Imageto64',reader.result);
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };


  this.ajax.cargarFoto(reader.result,1);  
console.log('Image', this.image);

}



}
