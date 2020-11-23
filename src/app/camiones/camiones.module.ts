import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamionesPageRoutingModule } from './camiones-routing.module';

import { CamionesPage } from './camiones.page';


import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { UserMenuComponentModule } from '../user-menu/user-menu.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamionesPageRoutingModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    UserMenuComponentModule
  ],
  declarations: [CamionesPage]
})
export class CamionesPageModule { }
