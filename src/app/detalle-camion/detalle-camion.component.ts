import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Camion } from '../camiones/camion';
import { GetService } from '../services/get/get.service';
import { PostService } from '../services/post/post.service';
import { PutService } from '../services/put/put.service';

@Component({
  selector: 'app-detalle-camion',
  templateUrl: './detalle-camion.component.html',
  styleUrls: ['./detalle-camion.component.scss'],
})
export class DetalleCamionComponent implements OnInit {

  public camion: Camion;
  private url = "camiones";
  @Input() id: string;
  public clicked: boolean;

  constructor(private getService: GetService,
    private postService: PostService,
    private putService: PutService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    this.camion = new Camion();
    this.clicked = false;
  }

  ngOnInit() {
    if (this.id != null) {
      this.getService.get(this.url, this.id).subscribe(result => {
        if (result.success) {
          this.camion = result.message;
        }
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
    this.postService.post(this.url, this.camion).subscribe(async result => {
      const toast = await this.toastCtrl.create({
        message: result.message,
        position: "middle",
        duration: result.success ? 3000 : 0,
        color: result.success ? "success" : "danger",
        buttons: result.success ? [] : [{
          text: 'Aceptar',
          role: 'cancel'
        }
        ]
      });
      toast.present();
      if (result.success) {
        this.dismiss(result);
      } else {
        this.clicked = false;
      }
    }, async error => {
      const toast = await this.toastCtrl.create({
        message: error,
        position: "middle",
        color: "danger",
        buttons: [{
          text: 'Aceptar',
          role: 'cancel'
        }
        ]
      });
      toast.present();
      this.clicked = false;
    });
  }

  actualizarCamion() {
    this.putService.put(this.url, this.id, this.camion).subscribe(async result => {
      const toast = await this.toastCtrl.create({
        message: result.message,
        position: "middle",
        duration: result.success ? 3000 : 0,
        color: result.success ? "success" : "danger",
        buttons: result.success ? [] : [{
          text: 'Aceptar',
          role: 'cancel'
        }
        ]
      });
      toast.present();
      if (result.success) {
        this.dismiss(result);
      } else {
        this.clicked = false;
      }
    }, async error => {
      const toast = await this.toastCtrl.create({
        message: error,
        position: "middle",
        color: "danger",
        buttons: [{
          text: 'Aceptar',
          role: 'cancel'
        }
        ]
      });
      toast.present();
      this.clicked = false;
    });
  }

  dismiss(result: any) {
    this.modalCtrl.dismiss(result);
  }

}
