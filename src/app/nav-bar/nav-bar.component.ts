import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  userLogged=this.authService.getUserLogged();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  logOut(){
    this.authService.logOut();
  }

}
