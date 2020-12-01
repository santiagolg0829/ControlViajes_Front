import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { DetalleCamionComponent } from '../detalle-camion/detalle-camion.component';
import { GetService } from '../services/get/get.service';
import { Camion } from './camion';
import { OverlayEventDetail } from '@ionic/core';
import { GenericService } from '../utils/genericService';

@Component({
  selector: 'app-camiones',
  templateUrl: './camiones.page.html',
  styleUrls: ['./camiones.page.scss'],
})
export class CamionesPage extends GenericService implements OnInit {

  public camiones: Camion[];
  public cols: any[];
  public statuses: any[];
  public statusesPropio: any[];
  private url = "camiones";

  constructor(public getService: GetService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    super(getService, null, null, toastCtrl, modalCtrl);
    this.camiones = [];
    this.statusesPropio = [
      { label: 'Si', value: 'true' },
      { label: 'No', value: 'false' },
    ];    
  }
  
  ngOnInit() {
    this.obtenerCamiones();
  }

  obtenerCamiones() {
    super.consumirGet(this.url).then((data:any)=>{
      this.camiones = data;
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
