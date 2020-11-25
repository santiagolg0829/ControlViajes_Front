import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramacionViajesPage } from './programacion-viajes.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramacionViajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramacionViajesPageRoutingModule {}
