import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./Views/home/home.module').then(m => m.HomeModule) }, 
  { path: 'nosotros', loadChildren: () => import('./Views/nosotros/nosotros.module').then(m => m.NosotrosModule) },
  { path: 'oferta', loadChildren: () => import('./Views/oferta/oferta.module').then(m => m.OfertaModule) },
  { path: 'estudiante', loadChildren: () => import('./Views/estudiante/estudiante.module').then(m => m.EstudianteModule) },
  { path: 'editarPerfil', loadChildren: () => import('./Views/editar-perfil/editar-perfil.module').then(m => m.EditarPerfilModule) },
  { path: 'crearCurso', loadChildren: () => import('./Views/crear-curso/crear-curso.module').then(m => m.CrearCursoModule) },
  { path: 'maestro', loadChildren: () => import('./Views/maestro/maestro.module').then(m => m.MaestroModule) },
  { path: 'curso_maestro', loadChildren: () => import('./Views/curso-maestro/curso-maestro.module').then(m => m.CursoMaestroModule) },
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
