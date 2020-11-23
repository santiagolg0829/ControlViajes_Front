import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { OverlayEventDetail } from '@ionic/core';
import { GetService } from '../services/get/get.service';
import { ToastController, ModalController } from '@ionic/angular';
import { DetalleClienteComponent } from '../detalle-cliente/detalle-cliente.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  public clientes: Cliente[];
  public cols: any[];
  public statuses: any[];
  private url = "clientes";

  constructor(private getService: GetService, public toastCtrl: ToastController, public modalCtrl: ModalController) {
    this.clientes = [];
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
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.getService.get(this.url).subscribe(async result => {
      if (result.success) {
        this.clientes = result.message;
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
      component: DetalleClienteComponent,
      componentProps: {
        'id': id
      },
      backdropDismiss: false,
      cssClass: 'long-modal'
    });
    modal.present();
    await modal.onWillDismiss().then((result: OverlayEventDetail) => {
      if (result.data != null && result.data.success) {
        this.obtenerClientes();
      }
    });
  }

}
