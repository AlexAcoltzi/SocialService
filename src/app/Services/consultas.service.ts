import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, map, observable, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  //El puerto puede cambiar
  //baseURL:string = "http://localhost:80/";
  baseURL:string = "http://165.232.137.66/PlataformaEducativa/";
  userLogged:BehaviorSubject<any> = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  //funcion que recibe la matricula y contraseña del usuario para validar los datos; 
  //Retorna toda la información del usuario
  Autenticarse(matricula: any,password: any){
    return this.http.post<any>(this.baseURL+"Autenticarse.php",{matricula,password})
    .pipe(map(User=>{
      if(User[0].contrasenia!= ""){
        this.saveData(JSON.stringify(User[0]));
      }
      return User;
    }))
  }
  cargarFoto(imagen: any, usuario: any){
    var json = {
      "img": imagen,
      "user": usuario};

    return this.http.post<any>(this.baseURL+"editarPerfil.php",{"img": imagen,"usuario":usuario})
    .pipe(map(User=>{
      return User;
    }))
  }


  //Almacenamos la información del usuario en localstorage del navegador
  saveData(data:any){
    this.userLogged.next(true);
    localStorage.setItem('data', data);
  }

  getData(){
    if (this.validator()) {
      return JSON.parse(localStorage.getItem('data')!);
    }
  }

  deleteData(){
    this.userLogged.next(false);
    localStorage.clear();
  }

  validator(){
      return localStorage.getItem('data')!= null;
  }

}
