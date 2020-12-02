import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoViajesPage } from './historico-viajes.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoViajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoViajesPageRoutingModule {}
