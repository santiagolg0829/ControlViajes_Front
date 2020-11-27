import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MisViajesPageRoutingModule } from './mis-viajes-routing.module';

import { MisViajesPage } from './mis-viajes.page';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { UserMenuComponentModule } from '../user-menu/user-menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisViajesPageRoutingModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    UserMenuComponentModule
  ],
  declarations: [MisViajesPage]
})
export class MisViajesPageModule {}
