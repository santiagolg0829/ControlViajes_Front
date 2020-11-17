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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetalleCamionComponent,
    DetalleSedeComponent,
    DetalleClienteComponent,
    DetalleUsuarioComponent
  ],
  entryComponents: [
    DetalleCamionComponent,
    DetalleSedeComponent,
    DetalleClienteComponent,
    DetalleUsuarioComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    IonicSelectableModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
