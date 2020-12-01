import { Component, Input, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { Cliente } from '../clientes/cliente';
import { Sede } from '../sedes/sede';
import { GetService } from '../services/get/get.service';
import { PostService } from '../services/post/post.service';
import { PutService } from '../services/put/put.service';
import { OverlayEventDetail } from '@ionic/core';
import { GenericService } from '../utils/genericService';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.scss'],
})
export class DetalleClienteComponent extends GenericService implements OnInit {

  public cliente: Cliente;
  private url = "clientes";
  public statuses: any[];
  public clicked: boolean;
  @Input() id: string;

  constructor(public getService: GetService,
    public postService: PostService,
    public putService: PutService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    super(getService, postService, putService, toastCtrl, modalCtrl);
    this.cliente = new Cliente();
    this.clicked = false;
  }

  ngOnInit() {
    if (this.id != null) {
      super.consumirGet(this.url, this.id).then((data:any)=>{
        this.cliente = data;
      });
    }
    this.statuses = [
      { label: 'Activo', value: true },
      { label: 'Inactivo', value: false },
    ];
  }

  async guardar() {
    this.clicked = true;
    if (this.id != null) {
      this.actualizarCliente();
    } else {
      this.crearCliente();
    }
  }

  crearCliente() {
    super.consumirPost(this.url, this.cliente).then((data:any)=>{
      this.cliente = data;
    });
  }

  actualizarCliente() {
    super.consumirPut(this.url, this.id, this.cliente).then((data:any)=>{
    });
  }
  
  eliminarSede(sede: Sede) {
    this.cliente.lstSedes = this.cliente.lstSedes.filter(val => val !== sede);
  }

  async agregarSede() {
    this.cliente.lstSedes.push(new Sede());
  }

}
