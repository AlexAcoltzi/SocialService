import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCursoComponent } from './crear-curso.component';


const routes: Routes = [{ path: '', component: CrearCursoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearCursoRoutingModule { }
