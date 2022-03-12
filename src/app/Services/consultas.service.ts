import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  baseURL:string = "http://localhost:8085/PlataformaEducativa/";

  constructor(private http: HttpClient) { }

  Autenticarse(matricula: any,password: any){
    return this.http.post<any>(this.baseURL+"Autenticarse.php",{matricula,password})
    .pipe(map(User=>{
      return User;
    }))
  }

}
