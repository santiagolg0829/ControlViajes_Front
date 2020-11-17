import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { DetalleUsuarioComponent } from '../detalle-usuario/detalle-usuario.component';
import { GetService } from '../services/get/get.service';
import { Usuario } from './usuario';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  public usuarios: Usuario[];
  public cols: any[];
  public statuses: any[];
  private url = "Account/users";
  
  constructor(private getService: GetService, public toastCtrl: ToastController, public modalCtrl: ModalController) {
    this.usuarios = [];
    this.statuses = [
      { label: 'Activo', value: 'true' },
      { label: 'Inactivo', value: 'false' },
    ];
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'email', header: 'Correo Electronico' },
      { field: 'celular', header: 'Celular' },
      { field: 'cliente', header: 'Cliente' },
      { field: 'activo', header: 'Estado' }
    ];
  }

  ngOnInit() {
    this.obtenerUsarios();
  }

  obtenerUsarios() {
    this.getService.get(this.url).subscribe(async result => {
      if (result.success) {
        this.usuarios = result.message;
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
      component: DetalleUsuarioComponent,
      componentProps: {
        'id': id
      },
      backdropDismiss: false,
      cssClass: 'modal-cliente'
    });
    modal.present();
    await modal.onWillDismiss().then((result: OverlayEventDetail) => {
      if (result.data != null && result.data.success) {
        this.obtenerUsarios();
      }
    });
  }

}
