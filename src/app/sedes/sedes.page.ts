import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { DetalleSedeComponent } from '../detalle-sede/detalle-sede.component';
import { GetService } from '../services/get/get.service';
import { GenericService } from '../utils/genericService';
import { Sede } from './sede';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.page.html',
  styleUrls: ['./sedes.page.scss'],
})
export class SedesPage extends GenericService implements OnInit {

  public sedes: Sede[];
  public cols: any[];
  public statuses: any[];
  private url = "sedes";

  constructor(public getService: GetService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    super(getService, null, null, toastCtrl, modalCtrl);
    this.sedes = [];
    this.statuses = [
      { label: 'Activo', value: 'true' },
      { label: 'Inactivo', value: 'false' },
    ];
  }

  ngOnInit() {
    this.obtenerSedes();
  }

  obtenerSedes() {
    super.consumirGet(this.url).then((data:any)=>{
      this.sedes = data;
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
