import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { map } from 'rxjs';
import { ConsultasService } from '../Services/consultas.service'

@Injectable({
  providedIn: 'root'
})
export class EditarService {

  baseURL: string = "http://165.232.137.66/PlataformaEducativa/";

  image:any;
  data:any;
  UserData:any;

  constructor(private http: HttpClient, private ajax: ConsultasService) { }


  updateFoto(event: any){
    this.image = <File>event.target.files[0];
    var reader = new FileReader();
    reader.onload = (()=>{
      this.UserData = this.ajax.getData();
      var $data = {'img' : reader.result,'usuario' : this.UserData.nombre};
      return this.http.post<any>("http://165.232.137.66/PlataformaEducativa/editarPerfil.php",JSON.stringify($data)).
      subscribe(map((User: any)=>{
        return User;
      }))
    });
    return reader.readAsDataURL(this.image);
  }
}
