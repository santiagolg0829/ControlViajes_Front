import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Cliente } from '../clientes/cliente';
import { Viaje } from '../programacion-viajes/viaje';
import { GetService } from '../services/get/get.service';
import { PostService } from '../services/post/post.service';
import { PutService } from '../services/put/put.service';

@Component({
  selector: 'app-detalle-programacion-viajes',
  templateUrl: './detalle-programacion-viajes.component.html',
  styleUrls: ['./detalle-programacion-viajes.component.scss'],
})
export class DetalleProgramacionViajesComponent implements OnInit {

  public viaje: Viaje;
  private url = "viajes";
  private urlClientes = "clientes";
  public cliente: Cliente;
  public clientes: Cliente[];
  @Input() id: string;

  constructor(private getService: GetService,
    private postService: PostService,
    private putService: PutService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    this.viaje = new Viaje();
    this.cliente = new Cliente();
    this.clientes = [];
  }

  ngOnInit() {
    this.obtenerClientes();
    if (this.id != null) {
      this.getService.get(this.url, this.id).subscribe(result => {
        if (result.success) {
          this.viaje = result.message;
        }
      });
    }
  }

  async guardar() {
    if (this.id != null) {
      this.actualizarviaje();
    } else {
      this.crearviaje();
    }
  }

  crearviaje() {
    this.postService.post(this.url, this.viaje).subscribe(async result => {
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
    });
  }

  actualizarviaje() {
    this.putService.put(this.url, this.id, this.viaje).subscribe(async result => {
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
      }
    }, async error => {
      this.showModalError(error);
    });
  }

  dismiss(result: any) {
    this.modalCtrl.dismiss(result);
  }

  async showModalError(message: string){
    const toast = await this.toastCtrl.create({
      message: message,
      position: "middle",
      color: "danger",
      buttons: [{
        text: 'Aceptar',
        role: 'cancel',
      }
      ]
    });
    toast.present();
    console.log(message);
  }

  //servicios externos
  obtenerClientes() {
    this.getService.get(this.urlClientes).subscribe(async result => {
      if (result.success) {
        console.log(result.message);
        this.clientes = result.message;
      } else {
        this.showModalError(result.message);
      }
    });
  }


}
