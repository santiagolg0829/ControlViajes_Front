import { Component, OnInit } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core';
import { GetService } from '../services/get/get.service';
import { ToastController, ModalController } from '@ionic/angular';
import { GenericService } from '../utils/genericService';
import { PostService } from '../services/post/post.service';

@Component({
  selector: 'app-ocupacion-diaria',
  templateUrl: './ocupacion-diaria.page.html',
  styleUrls: ['./ocupacion-diaria.page.scss'],
})
export class OcupacionDiariaPage extends GenericService implements OnInit {

  public lstOcupacionDiaria: any[];
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
    super.consumirPostSimple(this.url + '/ocupacionDiaria', null).then((data:any)=>{
      this.lstOcupacionDiaria = data;
    });
  }

  async mostrarModal(id) {
  }
}
