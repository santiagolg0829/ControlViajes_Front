import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramacionViajesPageRoutingModule } from './programacion-viajes-routing.module';

import { ProgramacionViajesPage } from './programacion-viajes.page';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { UserMenuComponentModule } from '../user-menu/user-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramacionViajesPageRoutingModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    UserMenuComponentModule
  ],
  declarations: [ProgramacionViajesPage]
})
export class ProgramacionViajesPageModule {}
