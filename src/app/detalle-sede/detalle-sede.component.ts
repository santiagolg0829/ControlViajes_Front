import { Component, Input, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { Camion } from '../camiones/camion';
import { Sede } from '../sedes/sede';
import { GetService } from '../services/get/get.service';
import { PostService } from '../services/post/post.service';
import { PutService } from '../services/put/put.service';

@Component({
  selector: 'app-detalle-sede',
  templateUrl: './detalle-sede.component.html',
  styleUrls: ['./detalle-sede.component.scss'],
})
export class DetalleSedeComponent implements OnInit {

  public sede: Sede;
  private url = "sedes";
  @Input() id: string;
  public clicked: boolean;

  constructor(private getService: GetService,
    private postService: PostService,
    private putService: PutService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    this.sede = new Sede();
    this.clicked = false;
  }

  ngOnInit() {
    if (this.id != null) {
      this.getService.get(this.url, this.id).subscribe(result => {
        if (result.success) {
          this.sede = result.message;
        }
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
  }

  crearSede() {
    this.postService.post(this.url, this.sede).subscribe(async result => {
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

  actualizarSede() {
    this.putService.put(this.url, this.id, this.sede).subscribe(async result => {
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
