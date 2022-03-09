import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./Views/home/home.module').then(m => m.HomeModule) }, 
  { path: 'nosotros', loadChildren: () => import('./Views/nosotros/nosotros.module').then(m => m.NosotrosModule) },
  { path: 'oferta', loadChildren: () => import('./Views/oferta/oferta.module').then(m => m.OfertaModule) },
  { path: 'estudiante', loadChildren: () => import('./Views/estudiante/estudiante.module').then(m => m.EstudianteModule) },
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
