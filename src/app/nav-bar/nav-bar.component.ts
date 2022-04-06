import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/Services/auth/auth.service';
import { ConsultasService } from 'app/Services/consultas.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthService, private ajax: ConsultasService) { }

  userLogged:any;


  //name = this.user['nombre'] + " " + this.user['paterno'];

  ngOnInit(): void {
    this.ajax.userLogged.subscribe((valuData)=>{
      this.userLogged = valuData;
    }
    );
  }
  logOut(){
    this.ajax.deleteData();
    //this.authService.logOut();
  }

}
