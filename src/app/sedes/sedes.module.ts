import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SedesPageRoutingModule } from './sedes-routing.module';

import { SedesPage } from './sedes.page';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import { UserMenuComponent } from '../user-menu/user-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SedesPageRoutingModule,
    TableModule,
    DropdownModule,
    ButtonModule
  ],
  declarations: [SedesPage, UserMenuComponent]
})
export class SedesPageModule {}
