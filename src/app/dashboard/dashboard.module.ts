import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';

import { ChartModule } from 'primeng/chart';

import { UserMenuComponentModule } from '../user-menu/user-menu.module';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    ChartModule,
    TableModule,
    DropdownModule,
    UserMenuComponentModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule { }
