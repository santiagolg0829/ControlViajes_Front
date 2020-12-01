import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Camion } from '../camiones/camion';
import { GetService } from '../services/get/get.service';
import { PostService } from '../services/post/post.service';
import { PutService } from '../services/put/put.service';
import { GenericService } from '../utils/genericService';

@Component({
  selector: 'app-detalle-camion',
  templateUrl: './detalle-camion.component.html',
  styleUrls: ['./detalle-camion.component.scss'],
})
export class DetalleCamionComponent extends GenericService implements OnInit {

  public camion: Camion;
  private url = "camiones";
  @Input() id: string;
  public clicked: boolean;

  constructor(public getService: GetService,
    public postService: PostService,
    public putService: PutService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    super(getService, postService, putService, toastCtrl, modalCtrl);
    this.camion = new Camion();  
    this.clicked = false;  
  }  

  ngOnInit() {
    if (this.id != null) {
      super.consumirGet(this.url, this.id).then((data:any)=>{
        this.camion = data;
      });
    }
  }

  async guardar() {
    this.clicked = true;
    if (this.id != null) {
      this.actualizarCamion();
    } else {
      this.crearCamion();
    }
  }

  crearCamion() {
    super.consumirPost(this.url, this.camion).then((data:any)=>{
      this.camion = data;
    });
  }

  actualizarCamion() {
    super.consumirPut(this.url, this.id, this.camion).then((data:any)=>{
      this.camion = data;
    });
  }

}
