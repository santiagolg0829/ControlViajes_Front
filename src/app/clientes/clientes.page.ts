import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { OverlayEventDetail } from '@ionic/core';
import { GetService } from '../services/get/get.service';
import { ToastController, ModalController } from '@ionic/angular';
import { DetalleClienteComponent } from '../detalle-cliente/detalle-cliente.component';
import { GenericService } from '../utils/genericService';
import { PostService } from '../services/post/post.service';
import { PutService } from '../services/put/put.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage extends GenericService implements OnInit {

  public clientes: Cliente[];
  public cols: any[];
  public statuses: any[];
  private url = "clientes";

  constructor(public getService: GetService,
    public postService: PostService,
    public putService: PutService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    super(getService, null, null, toastCtrl, modalCtrl);
    this.clientes = [];    
  }

  ngOnInit() {
    this.obtenerClientes();
  }

  obtenerClientes() {
    super.consumirGet(this.url).then((data:any)=>{
      this.clientes = data;
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
