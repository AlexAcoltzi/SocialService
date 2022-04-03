import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth/auth.service';
import { ConsultasService } from 'app/Services/consultas.service';
import { first, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';





@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {
  private image:any;
  userLogged=this.authService.getUserLogged();
  constructor(private authService: AuthService,private  _router: Router,private ajax:ConsultasService,private http: HttpClient) { }

  ngOnInit(): void {
  }
  configurar(): void{
 
    this._router.navigateByUrl('/editar-perfil')
   
  
}

cambiarImagen(event:any):void{
  this.image = <File>event.target.files[0];
  var instancia = this.ajax;
  var reader = new FileReader();
  var data_64;
  reader.onload = function () {
    var $data = { 'img': reader.result, 'usuario': 2 };
    $.ajax({
        type: 'POST',
        url: 'http://localhost:80/editarPerfil.php',
        data: $data,
        success: function() {
            
        },
        error: function() {
            
        },
    });
};
reader.readAsDataURL(this.image);    
}

}