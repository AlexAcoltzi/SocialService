import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth/auth.service';
@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent implements OnInit {

  clases: { nombre: string, docente: string} []=[
    {'nombre': 'Literatura', 'docente': 'Javier Garcia Vazquez'},
    {'nombre': 'Arte', 'docente': 'Josue Lima Galvan'},
    {'nombre': 'Algebra', 'docente': 'Sergio Zenteno Medel'},
    {'nombre': 'Historia', 'docente': 'Rene Robles Huerta'},
    {'nombre': 'Geografia', 'docente': 'Antonio Garcia Villagran'},
    {'nombre': 'Informatica', 'docente': 'Enrique Gomez Juarez'},
]

  userLogged=this.authService.getUserLogged();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
