import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Camion } from '../camiones/camion';
import { Cliente } from '../clientes/cliente';
import { Viaje } from '../programacion-viajes/viaje';
import { Sede } from '../sedes/sede';
import { GetService } from '../services/get/get.service';
import { PostService } from '../services/post/post.service';
import { PutService } from '../services/put/put.service';
import { Usuario } from '../usuarios/usuario';
import { GenericService } from '../utils/genericService';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-viaje',
  templateUrl: './detalle-viaje.component.html',
  styleUrls: ['./detalle-viaje.component.scss'],
})
export class DetalleViajeComponent extends GenericService implements OnInit {

  public viaje: Viaje;
  private url = "viajes";
  private urlTaller = "camiones/CambiarEstadoTaller"
  public clicked: boolean;
  public disabledTaller:boolean;
  public roles = [];

  public fecha: Date;
  //Externos 
  public cliente: Cliente;
  public clientes: Cliente[];

  public camion: Camion;
  public camiones: Camion[];

  public conductor: Usuario;
  public conductores: Usuario[];

  public auxiliar: Usuario;
  public auxiliares: Usuario[];

  public origen: Sede;
  public destino: Sede;
  public origenesDestinos: Sede[];
  public habilidato: boolean;

  @Input() id: string;

  constructor(public getService: GetService,
    public postService: PostService,
    public putService: PutService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    private storage: Storage,
    public alertController: AlertController) {
    super(getService, postService, putService, toastCtrl, modalCtrl);
    this.viaje = new Viaje();
    this.cliente = new Cliente();
    this.camion = new Camion();
    this.conductor = new Usuario();
    this.auxiliar = new Usuario();
    this.origen = new Sede();
    this.destino = new Sede();
    this.clicked = false;
    this.disabledTaller = false;
    
  }

  ngOnInit() {
    this.storage.get("roles").then((val) => {
      if (val != null) {
        this.roles = val;
      }
    });
    if (this.id != null) {
      super.consumirGet(this.url + "/" + this.id).then((data: any) => {
        this.viaje = data;
        this.cliente = data.cliente;
        this.camion = data.camion;
        this.conductor = data.conductor;
        this.auxiliar = data.auxiliar;
        this.origen = data.sedeOrigen;
        this.destino = data.sedeDestino;
        this.fecha = data.fecha;
        this.destino.nombre = data.sedeOrigen.direccion;
        this.habilidato = this.viaje.estado === "Finalizado" ? true : false;
        this.disabledTaller = this.viaje.estado === "Finalizado" ? true : false;
      });
    }
  }

  async acutalizarViaje() {
    this.clicked = true;
    if (this.viaje.inicioRuta === null || this.viaje.finRuta === null) {
      super.consumirPost(this.url + "/actualizarEstado", this.viaje).then((data: any) => {
        this.clicked = false;
       });
    } 
  }

  crearviaje() {
    this.viaje.idCliente = this.cliente.id;
    this.viaje.idOrigen = this.origen.id;
    this.viaje.idDestino = this.destino.id;
    this.viaje.idCamion = this.camion.id;
    this.viaje.idConductor = this.conductor.id;
    this.viaje.idAuxiliar = this.auxiliar == null ? null : this.auxiliar.id;
    this.viaje.fecha = this.fecha;
    super.consumirPost(this.url, this.viaje).then((data: any) => {
    });
  }

  async EnviarTaller() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Advertencia!',
      message: '¿Estas seguro que deseas realizar esta acción?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {          
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.disabledTaller = true;
            super.consumirPut(this.urlTaller, this.viaje.idCamion, null).then((data: any) => {
              this.disabledTaller = false;
             });
          }
        }
      ]
    });
    await alert.present();
  }
  
}
