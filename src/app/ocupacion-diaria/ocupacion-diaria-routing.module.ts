import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcupacionDiariaPage } from './ocupacion-diaria.page';

const routes: Routes = [
  {
    path: '',
    component: OcupacionDiariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcupacionDiariaPageRoutingModule {}
