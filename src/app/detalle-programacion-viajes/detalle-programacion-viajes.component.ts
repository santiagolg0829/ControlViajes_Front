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

@Component({
  selector: 'app-detalle-programacion-viajes',
  templateUrl: './detalle-programacion-viajes.component.html',
  styleUrls: ['./detalle-programacion-viajes.component.scss'],
})
export class DetalleProgramacionViajesComponent extends GenericService implements OnInit {

  public viaje: Viaje;
  private url = "viajes";
  private urlClientes = "clientes";
  private urlCamiones = "camiones";
  private urlConductores = "account/listarPorRol/conductor";
  private urlAuxiliares = "account/listarPorRol/auxiliar";
  private urlOrigenDestinoCliente = "sedes/PorCliente/";
  public clicked: boolean;

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
    this.clicked = false;

  }

  ngOnInit() {
    this.obtenerClientes();
    this.obtenerCamiones();
    this.obtenerConductores();
    this.obtenerAuxiliares();

    if (this.id != null) {
      super.consumirGet(this.url, this.id).then((data:any)=>{
        this.viaje = data;
        this.cliente = data.cliente;
        this.camion = data.camion;
        this.conductor = data.conductor;
        this.auxiliar = data.auxiliar;
        this.origen = data.sedeOrigen;
        this.destino = data.sedeDestino;
        this.fecha = data.fecha;
      });
    }
  }

  async guardar() {
    this.clicked = true;
    if (this.id != null) {
      this.actualizarviaje();
    } else {
      this.crearviaje();
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
    super.consumirPost(this.url, this.viaje).then((data:any)=>{
      this.clientes = data;
    });
  }

  actualizarviaje() {
    super.consumirPut(this.url, this.id, this.viaje).then((data:any)=>{
      this.clientes = data;
    });
  }

  dismiss(result: any) {
    this.modalCtrl.dismiss(result);
  }

  //servicios externos
  obtenerClientes() {
    super.consumirGet(this.urlClientes).then((data:any)=>{
      this.clientes = data;
    });
  }

  obtenerCamiones() {
    super.consumirGet(this.urlCamiones).then((data:any)=>{
      this.camiones = data;
    });
  }

  obtenerConductores() {
    super.consumirGet(this.urlConductores).then((data:any)=>{
      this.conductores = data;
    });
  }

  obtenerAuxiliares() {
    super.consumirGet(this.urlAuxiliares).then((data:any)=>{
      this.auxiliares = data;
    });
  }

  obtenerOrigenesDestinos() {
    super.consumirGet(this.urlOrigenDestinoCliente, this.cliente.id).then((data:any)=>{
      this.origenesDestinos = data;
    });
  }
}
