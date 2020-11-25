import { Component, OnInit } from '@angular/core';
import { Viaje } from './viaje';
import { OverlayEventDetail } from '@ionic/core';
import { GetService } from '../services/get/get.service';
import { ToastController, ModalController } from '@ionic/angular';
import { DetalleProgramacionViajesComponent } from '../detalle-programacion-viajes/detalle-programacion-viajes.component';

@Component({
  selector: 'app-programacion-viajes',
  templateUrl: './programacion-viajes.page.html',
  styleUrls: ['./programacion-viajes.page.scss'],
})
export class ProgramacionViajesPage implements OnInit {


  public viajes: Viaje[];
  public cols: any[];
  public statuses: any[];
  private url = "viajes";

  constructor(private getService: GetService, public toastCtrl: ToastController, public modalCtrl: ModalController) {
    this.viajes = [];
    this.statuses = [
      { label: 'Activo', value: 'true' },
      { label: 'Inactivo', value: 'false' },
    ];
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'activo', header: 'Estado' }
    ];
  }

  ngOnInit() {
    this.obtenerViajes();
  }

  obtenerViajes() {
    this.getService.get(this.url).subscribe(async result => {
      if (result.success) {
        this.viajes = result.message;
      } else {
        const toast = await this.toastCtrl.create({
          message: result.message,
          position: "middle",
          buttons: [{
            text: 'Aceptar',
            role: 'cancel',
          }
          ]
        });
        toast.present();
        console.log(result.message);
      }
    });
  }

  async mostrarModal(id) {
    const modal = await this.modalCtrl.create({
      component: DetalleProgramacionViajesComponent,
      componentProps: {
        'id': id
      },
      backdropDismiss: false,
      cssClass: 'long-modal'
    });
    modal.present();
    await modal.onWillDismiss().then((result: OverlayEventDetail) => {
      if (result.data != null && result.data.success) {
        this.obtenerViajes();
      }
    });
  }

}
