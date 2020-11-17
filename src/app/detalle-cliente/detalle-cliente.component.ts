import { Component, Input, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { Cliente } from '../clientes/cliente';
import { DetalleSedeComponent } from '../detalle-sede/detalle-sede.component';
import { Sede } from '../sedes/sede';
import { GetService } from '../services/get/get.service';
import { PostService } from '../services/post/post.service';
import { PutService } from '../services/put/put.service';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.scss'],
})
export class DetalleClienteComponent implements OnInit {

  public cliente: Cliente;
  private url = "clientes";
  public statuses: any[];
  @Input() id: string;

  constructor(private getService: GetService,
    private postService: PostService,
    private putService: PutService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    this.cliente = new Cliente();
  }

  ngOnInit() {
    if (this.id != null) {
      this.getService.get(this.url, this.id).subscribe(result => {
        if (result.success) {
          this.cliente = result.message;
        }
      });
    }
    this.statuses = [
      { label: 'Activo', value: true },
      { label: 'Inactivo', value: false },
    ];
  }

  async guardar() {
    if (this.id != null) {
      this.actualizarCliente();
    } else {
      this.crearCliente();
    }
  }

  crearCliente() {
    this.postService.post(this.url, this.cliente).subscribe(async result => {
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

  actualizarCliente() {
    this.putService.put(this.url, this.id, this.cliente).subscribe(async result => {
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

  dismiss(result: any) {
    this.modalCtrl.dismiss(result);
  }
  
  eliminarSede(sede: Sede) {
    this.cliente.lstSedes = this.cliente.lstSedes.filter(val => val !== sede);
  }

  async agregarSede() {
    this.cliente.lstSedes.push(new Sede());

  }

}
