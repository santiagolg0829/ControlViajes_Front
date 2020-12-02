import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoViajesPageRoutingModule } from './historico-viajes-routing.module';
import { HistoricoViajesPage } from './historico-viajes.page';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { UserMenuComponentModule } from '../user-menu/user-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoViajesPageRoutingModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    UserMenuComponentModule
  ],
  declarations: [HistoricoViajesPage]
})
export class HistoricoViajesPageModule {}
