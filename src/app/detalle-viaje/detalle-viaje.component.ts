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
import { genericService } from '../utils/genericService';

@Component({
  selector: 'app-detalle-viaje',
  templateUrl: './detalle-viaje.component.html',
  styleUrls: ['./detalle-viaje.component.scss'],
})
export class DetalleViajeComponent extends genericService implements OnInit {

  public viaje: Viaje;
  private url = "viajes";
  private urlClientes = "clientes";
  private urlCamiones = "camiones";
  private urlConductores = "account/listarPorRol/conductor"
  private urlAuxiliares = "account/listarPorRol/auxiliar"
  private urlOrigenDestinoCliente = "sedes/PorCliente/"

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
    public modalCtrl: ModalController) {
    super(getService, postService, putService, toastCtrl, modalCtrl);
    this.viaje = new Viaje();
    this.cliente = new Cliente();
    this.camion = new Camion();
    this.conductor = new Usuario();
    this.auxiliar = new Usuario();
    this.origen = new Sede();
    this.destino = new Sede();    
    
  }

  ngOnInit() {
    if (this.id != null) {
      super.consumirGet(this.url + "/" + this.id).then((data:any)=>{
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
      });     
    }
  }

  async acutalizarViaje() {
    if (this.viaje.inicioRuta === null || this.viaje.finRuta === null) {      
      super.consumirPost(this.url + "/actualizarEstado",this.viaje).then((data:any)=>{});   
    } else {
      //super.consumirPost(this.url + "/actualizarEstado",this.viaje).then((data:any)=>{});  
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
    console.log(this.viaje);
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
}
