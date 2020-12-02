import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcupacionDiariaPageRoutingModule } from './ocupacion-diaria-routing.module';
import { OcupacionDiariaPage } from './ocupacion-diaria.page';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { UserMenuComponentModule } from '../user-menu/user-menu.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcupacionDiariaPageRoutingModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    UserMenuComponentModule
  ],
  declarations: [OcupacionDiariaPage]
})
export class OcupacionDiariaPageModule {}
