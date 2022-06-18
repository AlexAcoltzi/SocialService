import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.scss']
})
export class CrearCursoComponent implements OnInit {

  formularioClase!: FormGroup;

  CursoForm = new FormGroup({
    NombreClase : new FormControl('', Validators.required),
    Seccion : new FormControl('', Validators.required),
    Materia : new FormControl('', Validators.required),
    Datos : new FormControl('', Validators.required),
    MatriculaProfesor : new FormControl('', Validators.required)
  })

  

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
  }

  ObtenerDatos(form : any){
    console.log(form)
  }

}