import { GetService } from '../services/get/get.service';
import { ToastController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { PostService } from '../services/post/post.service';
import { PutService } from '../services/put/put.service';


export class genericService{

  public statuses: any[];
  public cols: any[];

  constructor(
    public getService: GetService, 
    public postService: PostService,
    public putService: PutService,
    public toastCtrl: ToastController, 
    public modalCtrl: ModalController) {
    this.statuses = [
      { label: 'Activo', value: 'true' },
      { label: 'Inactivo', value: 'false' },
    ];
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'activo', header: 'Estado' }
    ];   
  }

  consumirGet(url: string):  Promise<any> {
    return new Promise(resolve =>{
      this.getService.get(url).subscribe(async result => {
        if (result.success) {
          console.log(result.message);
          resolve(result.message);
        } else {
          this.showModalError(result.message);      
        }
      }, async error => {
        console.log(error);
        this.showModalError('Error de conexión con el servidor.');      
      });
    });
  }

  consumirPost(url: string, model: any):  Promise<any> {
    return new Promise(resolve =>{
      this.postService.post(url, model).subscribe(async result => {
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
          resolve(result.message);
          this.modalCtrl.dismiss(result);
        }
      }, async error => {
        this.showModalError(error);
      });
    });
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