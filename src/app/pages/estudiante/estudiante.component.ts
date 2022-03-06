import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent implements OnInit {
  userLogged=this.authService.getUserLogged();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
