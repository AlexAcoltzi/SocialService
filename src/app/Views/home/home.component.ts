import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultasService } from 'app/Services/consultas.service';
import { AuthService } from 'app/Services/auth/auth.service';
import { first, switchAll } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';


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
               private ajax:ConsultasService) { }


  ngOnInit(): void {
  }

  logIn(): void{
    const {email, pass } = this.usuario;
    this.ajax.Autenticarse(email,pass).
    pipe(first()).
    subscribe(data=>{
      if(data[0].matricula == ""){
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Verifica la contraseña'
        });
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
    //this.ajax.saveData(JSON.stringify(this.usuario));
    this.authService.loginWithGoogle().then(res =>{
      this._router.navigateByUrl('/estudiante')
    })
 
     
    

  }

  logOut(){
    localStorage.clear();
    this.authService.logOut();
  }

}
