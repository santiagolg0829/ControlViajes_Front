import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { PostService } from '../services/post/post.service';
import { GenericService } from '../utils/genericService';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.scss'],
})
export class CambiarPasswordComponent extends GenericService implements OnInit {

  public newPassword: string;
  public oldPassword: string;
  public confirmPassword: string;
  public url = "Account/ChangePassword";
  
  constructor(public postService: PostService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    super(null, postService, null, toastCtrl, modalCtrl);
    this.confirmPassword = "";
    this.newPassword = "";
    this.oldPassword = "";
    
  }

  ngOnInit() { }

  guardar() {
    let object = {
      "oldPassword": this.oldPassword,
      "newPassword": this.newPassword,
      "confirmPassword": this.confirmPassword
    };
    super.consumirPost(this.url, object).then((data:any)=>{});
  }

  dismiss(result: any) {
    this.modalCtrl.dismiss(result);
  }

}
