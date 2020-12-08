import { Component, OnInit } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core';
import { GetService } from '../services/get/get.service';
import { ToastController, ModalController } from '@ionic/angular';
import { Viaje } from '../programacion-viajes/viaje';
import { GenericService } from '../utils/genericService';
import { DetalleViajeComponent } from '../detalle-viaje/detalle-viaje.component';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.page.html',
  styleUrls: ['./mis-viajes.page.scss'],
})
export class MisViajesPage extends GenericService implements OnInit {

  public viajes: Viaje[];
  private url = "viajes/misViajes";
  public cols: any[];
  public roles = [];

  constructor(public getService: GetService, public toastCtrl: ToastController, public modalCtrl: ModalController, private storage: Storage) {
    super(getService, null, null, toastCtrl, modalCtrl);

    this.viajes = [];
  }

  ngOnInit() {
    this.storage.get("roles").then((val) => {
      if (val != null) {
        this.roles = val;
      }
    });
    this.obtenerViajes();
  }

  obtenerViajes() {
    super.consumirGet(this.url).then((data: any) => {
      this.viajes = data;
    });
  }

  async mostrarModal(id) {
    const modal = await this.modalCtrl.create({
      component: DetalleViajeComponent,
      componentProps: {
        'id': id
      },
      backdropDismiss: false,
      cssClass: 'long-modal'
    });
    modal.present();
    await modal.onWillDismiss().then((result: OverlayEventDetail) => {
      this.obtenerViajes();
    });
  }

}
