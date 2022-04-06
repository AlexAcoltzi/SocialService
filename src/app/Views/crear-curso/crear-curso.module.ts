import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearCursoRoutingModule} from './crear-curso-routing.module';
import { CrearCursoComponent } from './crear-curso.component';


@NgModule({
  declarations: [
    CrearCursoComponent
  ],
  imports: [
    CommonModule,
    CrearCursoRoutingModule
  ]
})
export class CrearCursoModule { }