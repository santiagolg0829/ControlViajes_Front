import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicStorageModule } from '@ionic/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalleCamionComponent } from './detalle-camion/detalle-camion.component';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { DetalleSedeComponent } from './detalle-sede/detalle-sede.component';
import { DetalleClienteComponent } from './detalle-cliente/detalle-cliente.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { IonicSelectableModule } from 'ionic-selectable';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';
import { UserMenuComponentModule } from './user-menu/user-menu.module';
import { DetalleProgramacionViajesComponent } from './detalle-programacion-viajes/detalle-programacion-viajes.component';
import { DetalleViajeComponent } from './detalle-viaje/detalle-viaje.component';

import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetalleCamionComponent,
    DetalleSedeComponent,
    DetalleClienteComponent,
    DetalleUsuarioComponent,
    CambiarPasswordComponent,
    DetalleProgramacionViajesComponent,
    DetalleViajeComponent
  ],
  entryComponents: [
    DetalleCamionComponent,
    DetalleSedeComponent,
    DetalleClienteComponent,
    DetalleUsuarioComponent,
    CambiarPasswordComponent,
    DetalleProgramacionViajesComponent,
    DetalleViajeComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    ChartModule,
    IonicSelectableModule,
    UserMenuComponentModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseX,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
