import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultasService } from 'app/Services/consultas.service';
import { AuthService } from 'src/app/Services/auth/auth.service';

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
    console.log(this.usuario);
    const {email, pass } = this.usuario;
    this.authService.login(email,pass).then(res =>{
      console.log(res);
    })
  }
  googleLogIn(): void{
    console.log(this.usuario);
    this.authService.loginWithGoogle().then(res =>{
      console.log(res);
      this._router.navigateByUrl('/estudiante')
     
    })
 
     
    

  }

  obtenerUsuario(){
    this.authService.getUserLogged().subscribe(res=> {
      console.log(res?.email);
    })
  }
  logOut(){
    this.authService.logOut();
  }



}
