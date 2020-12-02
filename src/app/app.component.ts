import { Component } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    {
      title: 'Camiones',
      url: '/camiones',
      icon: 'car'
    },
    {
      title: 'Clientes',
      url: '/clientes',
      icon: 'people'
    },
    {
      title: 'Usuarios',
      url: '/usuarios',
      icon: 'people-circle'
    },
    {
      title: 'Programación Viajes',
      url: '/programacion-viajes',
      icon: 'alarm'
    },
    {
      title: 'Mis Viajes',
      url: '/mis-viajes',
      icon: 'earth'
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'bar-chart'
    },
    {
      title: 'Historico Viajes',
      url: '/historico-viajes',
      icon: 'receipt-outline'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();


    });
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  openEnd() {
    this.menu.open('end');
  }
  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
