import { Component, Input, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { Sede } from '../sedes/sede';
import { GetService } from '../services/get/get.service';
import { PostService } from '../services/post/post.service';
import { PutService } from '../services/put/put.service';
import { GenericService } from '../utils/genericService';

@Component({
  selector: 'app-detalle-sede',
  templateUrl: './detalle-sede.component.html',
  styleUrls: ['./detalle-sede.component.scss'],
})
export class DetalleSedeComponent extends GenericService implements OnInit {

  public sede: Sede;
  private url = "sedes";
  @Input() id: string;
  public clicked: boolean;

  constructor(public getService: GetService,
    public postService: PostService,
    public putService: PutService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    super(getService, postService, putService, toastCtrl, modalCtrl);
    this.sede = new Sede();
    this.clicked = false;
  }

  ngOnInit() {
    if (this.id != null) {
      super.consumirGet(this.url, this.id).then((data:any)=>{
        this.sede = data;
      });
    }
  }

  async guardar() {
    this.clicked = true;
    if (this.id != null) {
      this.actualizarSede();
    } else {
      this.crearSede();
    }
    this.clicked = false;
  }

  crearSede() {
    super.consumirPost(this.url, this.sede).then((data:any)=>{
    });
  }

  actualizarSede() {
    super.consumirPut(this.url, this.id, this.sede).then((data:any)=>{
    });
  }

}
