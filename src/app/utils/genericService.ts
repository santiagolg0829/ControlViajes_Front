import { GetService } from '../services/get/get.service';
import { ToastController, ModalController } from '@ionic/angular';
import { PostService } from '../services/post/post.service';
import { PutService } from '../services/put/put.service';

export class GenericService{

  public statuses: any[];

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
  }

  consumirGet(url: string, id?: any):  Promise<any> {
    return new Promise(resolve =>{
      this.getService.get(url, id).subscribe(async result => {
        if (result.success) {
          console.log(result.message);
          resolve(result.message);
        } else {
          this.showModalError(result.message);      
        }
      }, async error => {
        console.log(error);
        this.showModalError(error.message);   
      });
    });
  }

  consumirPost(url: string, model: any): Promise<any> {
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
          }]
        });
        toast.present();
        if (result.success) {
          resolve(result.message);
          this.modalCtrl.dismiss(result);
        } else {
          this.showModalError(result.message);
        }
      }, async error => {
        console.log(error);
        this.showModalError(error.message);
      });
    });
  }

  consumirPostSimple(url: string, model: any): Promise<any> {
    return new Promise(resolve =>{
      this.postService.post(url, model).subscribe(async result => {
        
        if (result.success) {
          resolve(result.message);
        } else {
          this.showModalError(result.message);
        }
      }, async error => {
        console.log(error);
        this.showModalError(error.message);
      });
    });
  }
 
  consumirPut(url: string, id: any, model: any) : Promise<any> {

    return new Promise(resolve =>{
      this.putService.put(url, id, model).subscribe(async result => {
        const toast = await this.toastCtrl.create({
          message: result.message,
          position: "middle",
          duration: result.success ? 3000 : 0,
          color: result.success ? "success" : "danger",
          buttons: result.success ? [] : [{
            text: 'Aceptar',
            role: 'cancel'
          }]
        });
        toast.present();
        if (result.success) {
          resolve(result.message);
          this.modalCtrl.dismiss(result);
        }
      }, async error => {
        console.log(error);
        this.showModalError(error.message);
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
      }]
    });
    toast.present();
  }

  dismiss(result: any) {
    this.modalCtrl.dismiss(result);
  }
} 