import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditarService {

  baseURL: string = "http://165.232.137.66/PlataformaEducativa/";

  image:any;

  constructor(private http: HttpClient) { }


  updateFoto(event: any, matricula:any){
    this.image = <File>event.target.files[0];
    var reader = new FileReader();
    var data_64;
    //!nombre del archivo entre comillas
    reader.onload = (()=>{
      var $data = {'img' : reader.result,'usuario' : matricula};
      return this.http.post<any>("http://165.232.137.66/PlataformaEducativa/editarPerfil.php",JSON.stringify($data)).
      subscribe(map((User: any)=>{
        return User;
      }))
    });

    return reader.readAsDataURL(this.image);
    console.log("realizo correctamente el proceso");

  }
}
