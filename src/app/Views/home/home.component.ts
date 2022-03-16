import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultasService } from 'app/Services/consultas.service';
import { AuthService } from 'app/Services/auth/auth.service';
import { first } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userLogged=this.authService.getUserLogged();

   usuario={
     email: '',
     pass: ''
   }

  constructor( private authService: AuthService, private  _router: Router,
               private ajax:ConsultasService, private toastr:ToastrService) { }


  ngOnInit(): void {
  }

  logIn(): void{
    console.log(this.usuario);
    const {email, pass } = this.usuario;
    this.ajax.Autenticarse(email,pass).
    pipe(first()).
    subscribe(data=>{
      console.log(data[0]);
      if(data[0].correo == ""){
        this.toastr.error("La contraseña es incorrecta")
      } else{
        if (data[0].tipo == "Alumno") {
          this._router.navigateByUrl('/estudiante');
        }else if (data[0].tipo == "Profesor") {
          this._router.navigateByUrl('#');
        }
      }
    })
  }
  googleLogIn(): void{
    console.log(this.usuario);
    this.authService.loginWithGoogle().then(res =>{
      console.log(res);
      this._router.navigateByUrl('/estudiante')
     
    })
 
     
    

  }

  logOut(){
    this.authService.logOut();
  }

}
