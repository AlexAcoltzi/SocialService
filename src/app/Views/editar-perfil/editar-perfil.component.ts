import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth/auth.service';
import { EditarService } from 'app/Services/editar.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {
  image:any;
  userLogged=this.authService.getUserLogged();
  constructor(private authService: AuthService,private  _router: Router, private ajax:EditarService) { }

  ngOnInit(): void {
  }
  configurar(): void{
 
    this._router.navigateByUrl('/editar-perfil')
   
  
}

cambiarImagen(event:any){
  this.image = this.ajax.updateFoto(event);
}

}