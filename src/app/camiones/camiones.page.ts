import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { DetalleCamionComponent } from '../detalle-camion/detalle-camion.component';
import { GetService } from '../services/get/get.service';
import { Camion } from './camion';
import { OverlayEventDetail } from '@ionic/core';


@Component({
  selector: 'app-camiones',
  templateUrl: './camiones.page.html',
  styleUrls: ['./camiones.page.scss'],
})
export class CamionesPage implements OnInit {

  public camiones: Camion[];
  public cols: any[];
  public statuses: any[];
  public statusesPropio: any[];
  private url = "camiones";

  constructor(private getService: GetService, public toastCtrl: ToastController, public modalCtrl: ModalController) {
    this.camiones = [];
    this.statuses = [
      { label: 'Activo', value: 'true' },
      { label: 'Inactivo', value: 'false' },
    ];
    this.statusesPropio = [
      { label: 'Si', value: 'true' },
      { label: 'No', value: 'false' },
    ];
    this.cols = [
      { field: 'placa', header: 'Placa' },
      { field: 'remolque', header: 'Remolque' },
      { field: 'esPropio', header: 'Propio' },
      { field: 'activo', header: 'Estado' }
    ];
  }

  ngOnInit() {
    this.obtenerCamiones();
  }

  obtenerCamiones() {
    this.getService.get(this.url).subscribe(async result => {
      if (result.success) {
        this.camiones = result.message;
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
      component: DetalleCamionComponent,
      componentProps: {
        'id': id
      },
      backdropDismiss: false
    });
    modal.present();
    await modal.onWillDismiss().then((result: OverlayEventDetail) => {
      if (result.data != null && result.data.success) {
        this.obtenerCamiones();
      }
    });
  }

}
