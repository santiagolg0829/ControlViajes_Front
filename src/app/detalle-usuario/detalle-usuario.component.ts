import { Component, Input, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { Cliente } from '../clientes/cliente';
import { GetService } from '../services/get/get.service';
import { PostService } from '../services/post/post.service';
import { PutService } from '../services/put/put.service';
import { Usuario } from '../usuarios/usuario';
import { GenericService } from '../utils/genericService';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss'],
})
export class DetalleUsuarioComponent extends GenericService implements OnInit {

  public usuario: Usuario;
  public clientes: Cliente[];
  private urlObtencion = "account/users";
  private urlCreacion = "account/create";
  private urlEdicion = "account/editUser";
  private urlClientes = "clientes";
  public cliente: Cliente
  @Input() id: string;
  public clicked: boolean;

  constructor(public getService: GetService,
    public postService: PostService,
    public putService: PutService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    super(getService, postService, putService, toastCtrl, modalCtrl);
    this.usuario = new Usuario();
    this.cliente = new Cliente();
    this.clientes = [];
    this.clicked = false;
  }

  ngOnInit() {
    this.obtenerClientes();
    if (this.id != null) {
      super.consumirGet(this.urlObtencion, this.id).then((data:any)=>{
        this.usuario = data;
          this.cliente = this.clientes.find(val => val.id !== this.usuario.idCliente);
      });
    }
  }

  obtenerClientes() {
    super.consumirGet(this.urlClientes).then((data:any)=>{
      this.clientes = data;
    });
  }

  async guardar() {
    this.clicked = true;
    this.usuario.idCliente = this.cliente.id;
    if (this.id != null) {
      this.actualizarUsuario();
    } else {
      this.crearUsuario();
    }

  }

  crearUsuario() {    
    super.consumirPost(this.urlCreacion, this.usuario).then((data:any)=>{
      this.clicked = false;
    });
  }

  actualizarUsuario() {
    if (this.usuario.password == "") {
      this.usuario.password = null;
    }
    super.consumirPut(this.urlEdicion, this.id, this.usuario).then((data:any)=>{
      this.clicked = false;
    });    
  }
}
