import { Component, Input, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { Cliente } from '../clientes/cliente';
import { Sede } from '../sedes/sede';
import { GetService } from '../services/get/get.service';
import { PostService } from '../services/post/post.service';
import { PutService } from '../services/put/put.service';
import { Usuario } from '../usuarios/usuario';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss'],
})
export class DetalleUsuarioComponent implements OnInit {

  public usuario: Usuario;
  public clientes: Cliente[];
  private urlObtencion = "account/users";
  private urlCreacion = "account/create";
  private urlEdicion = "account/editUser";
  private urlClientes = "clientes";
  public cliente: Cliente
  @Input() id: string;

  constructor(private getService: GetService,
    private postService: PostService,
    private putService: PutService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    this.usuario = new Usuario();
    this.cliente = new Cliente();
    this.clientes = [];
  }

  ngOnInit() {
    this.obtenerClientes();
    if (this.id != null) {
      this.getService.get(this.urlObtencion, this.id).subscribe(result => {
        if (result.success) {
          this.usuario = result.message;
          this.cliente = this.clientes.find(val => val.id !== this.usuario.idCliente);
        }
      });
    }
  }

  obtenerClientes() {
    this.getService.get(this.urlClientes).subscribe(async result => {
      if (result.success) {
        this.clientes = result.message;
      } else {
        const toast = await this.toastCtrl.create({
          message: result.message,
          position: "middle",
          buttons: [{
            text: 'Aceptar',
            role: 'cancel',
          }
          ]
        });
        toast.present();
        console.log(result.message);
      }
    });
  }

  async guardar() {
    this.usuario.idCliente = this.cliente.id;
    if (this.id != null) {
      this.actualizarUsuario();
    } else {
      this.crearUsuario();
    }
  }

  crearUsuario() {
    this.postService.post(this.urlCreacion, this.usuario).subscribe(async result => {
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

  actualizarUsuario() {
    this.putService.put(this.urlEdicion, this.id, this.usuario).subscribe(async result => {
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

}
