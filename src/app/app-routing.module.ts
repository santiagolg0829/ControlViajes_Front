import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

/**
 * In this file we set up the main routes within our application
 * We have multiple options available to us for routing
 * 
 * Route to a specific component
 * Route to a lazy-loaded module
 * Redirect to a predefined route 
 * 
 * We can see an example of each below
 */

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'camiones',
    loadChildren: () => import('./camiones/camiones.module').then(m => m.CamionesPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesPageModule)
  },
  {
    path: 'sedes',
    loadChildren: () => import('./sedes/sedes.module').then(m => m.SedesPageModule)
  },
  {
    path: 'programacion-viajes',
    loadChildren: () => import('./programacion-viajes/programacion-viajes.module').then( m => m.ProgramacionViajesPageModule)
  },  {
    path: 'mis-viajes',
    loadChildren: () => import('./mis-viajes/mis-viajes.module').then( m => m.MisViajesPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'historico-viajes',
    loadChildren: () => import('./historico-viajes/historico-viajes.module').then( m => m.HistoricoViajesPageModule)
  },
  {
    path: 'ocupacion-diaria',
    loadChildren: () => import('./ocupacion-diaria/ocupacion-diaria.module').then( m => m.OcupacionDiariaPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
