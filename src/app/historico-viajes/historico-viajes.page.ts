import { Component, OnInit } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core';
import { GetService } from '../services/get/get.service';
import { ToastController, ModalController } from '@ionic/angular';
import { GenericService } from '../utils/genericService';
import { Viaje } from '../programacion-viajes/viaje';
import { PostService } from '../services/post/post.service';

@Component({
  selector: 'app-historico-viajes',
  templateUrl: './historico-viajes.page.html',
  styleUrls: ['./historico-viajes.page.scss'],
})
export class HistoricoViajesPage extends GenericService implements OnInit {

  public viajes: Viaje[];
  private url = "viajes";
  public cols: any[];

  constructor(public getService: GetService,
    public postService: PostService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    super(getService, postService, null, toastCtrl,modalCtrl);    
  }

  ngOnInit() {
    this.obtenerViajes();
  }

  obtenerViajes() {
    super.consumirPostSimple(this.url + '/historico', null).then((data:any)=>{
      this.viajes = data;
    });
  }

  async mostrarModal(id) {
  }
}
