import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent implements OnInit {
  userLogged=this.authService.getUserLogged();
  constructor(private authService: AuthService,private  _router: Router) { }

  ngOnInit(): void {
  }


  configurar(): void{
 
          this._router.navigateByUrl('/editarPerfil')
         
        
  }
}

