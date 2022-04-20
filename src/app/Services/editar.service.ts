import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditarService {

  baseURL: string = "http://165.232.137.66/PlataformaEducativa/";

  image:any;

  constructor(private http: HttpClient) { }


  updateFoto(event: any){
    this.image = <File>event.target.files[0];
    var reader = new FileReader();
    //!nombre del archivo entre comillas
    reader.onload = (()=>{
      return this.http.post<any>(this.baseURL+"",{}).
      subscribe(map((User: any)=>{
        return User;
      }))
    });

    return reader.readAsDataURL(this.image);
  }
}
