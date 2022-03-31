import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  //El puerto puede cambiar
  baseURL:string = "http://165.232.137.66/PlataformaEducativa/";
  valida:boolean = false;

  constructor(private http: HttpClient) { }

  Autenticarse(matricula: any,password: any){
    return this.http.post<any>(this.baseURL+"Autenticarse.php",{matricula,password})
    .pipe(map(User=>{
      return User;
    }))
  }

  validator(user: any){
    if(user != null){
      this.valida = true;
      return this.valida;
    }
    return this.valida;
  }

}
