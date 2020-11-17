import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { DetalleSedeComponent } from '../detalle-sede/detalle-sede.component';
import { GetService } from '../services/get/get.service';
import { Sede } from './sede';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.page.html',
  styleUrls: ['./sedes.page.scss'],
})
export class SedesPage implements OnInit {

  public sedes: Sede[];
  public cols: any[];
  public statuses: any[];
  private url = "sedes";

  constructor(private getService: GetService, public toastCtrl: ToastController, public modalCtrl: ModalController) {
    this.sedes = [];
    this.statuses = [
      { label: 'Activo', value: 'true' },
      { label: 'Inactivo', value: 'false' },
    ];
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'direccion', header: 'Direccion' },
      { field: 'activo', header: 'Estado' }
    ];
  }

  ngOnInit() {
    this.obtenerSedes();
  }

  obtenerSedes() {
    this.getService.get(this.url).subscribe(async result => {
      if (result.success) {
        this.sedes = result.message;
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
      component: DetalleSedeComponent,
      componentProps: {
        'id': id,
      },
      backdropDismiss: false
    });
    modal.present();
    await modal.onWillDismiss().then((result: OverlayEventDetail) => {
      if (result.data != null && result.data.success) {
        this.obtenerSedes();
      }
    });
  }

}
