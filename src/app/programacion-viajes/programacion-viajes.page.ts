import { Component, OnInit } from '@angular/core';
import { Viaje } from './viaje';
import { OverlayEventDetail } from '@ionic/core';
import { GetService } from '../services/get/get.service';
import { ToastController, ModalController } from '@ionic/angular';
import { DetalleProgramacionViajesComponent } from '../detalle-programacion-viajes/detalle-programacion-viajes.component';
import { GenericService } from '../utils/genericService';

@Component({
  selector: 'app-programacion-viajes',
  templateUrl: './programacion-viajes.page.html',
  styleUrls: ['./programacion-viajes.page.scss'],
})
export class ProgramacionViajesPage extends GenericService implements OnInit {

  public viajes: Viaje[];
  private url = "viajes";
  public cols: any[];

  constructor(public getService: GetService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    super(getService, null, null, toastCtrl,modalCtrl);    
  }

  ngOnInit() {
    this.obtenerViajes();
  }

  obtenerViajes() {
    super.consumirGet(this.url).then((data:any)=>{
      this.viajes = data;
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
