import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { DetalleUsuarioComponent } from '../detalle-usuario/detalle-usuario.component';
import { GetService } from '../services/get/get.service';
import { Usuario } from './usuario';
import { OverlayEventDetail } from '@ionic/core';
import { PutService } from '../services/put/put.service';
import { PostService } from '../services/post/post.service';
import { GenericService } from '../utils/genericService';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage  extends GenericService implements OnInit {

  public usuarios: Usuario[];
  public cols: any[];
  public statuses: any[];
  private url = "Account/users";
  
  constructor(public getService: GetService,
    public postService: PostService,
    public putService: PutService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    super(getService, postService, putService, toastCtrl, modalCtrl);
    this.usuarios = []
  }

  ngOnInit() {
    this.obtenerUsarios();
  }

  obtenerUsarios() {
    super.consumirGet(this.url).then((data:any)=>{
      this.usuarios = data;
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
