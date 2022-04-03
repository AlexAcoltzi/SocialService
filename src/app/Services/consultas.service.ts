import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  //El puerto puede cambiar
  baseURL:string = "http://localhost:80/";

  constructor(private http: HttpClient) { }

  Autenticarse(matricula: any,password: any){
    return this.http.post<any>(this.baseURL+"Autenticarse.php",{matricula,password})
    .pipe(map(User=>{
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

}
