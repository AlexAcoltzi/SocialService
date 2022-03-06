import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, 
  { path: 'nosotros', loadChildren: () => import('./pages/nosotros/nosotros.module').then(m => m.NosotrosModule) },
  { path: 'oferta', loadChildren: () => import('./pages/oferta/oferta.module').then(m => m.OfertaModule) },
  { path: 'estudiante', loadChildren: () => import('./pages/estudiante/estudiante.module').then(m => m.EstudianteModule) },
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
