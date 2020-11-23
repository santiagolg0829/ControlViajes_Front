import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { PostService } from '../services/post/post.service';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.scss'],
})
export class CambiarPasswordComponent implements OnInit {

  public newPassword: string;
  public oldPassword: string;
  public confirmPassword: string;
  public url = "Account/ChangePassword";

  constructor(
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public postService: PostService) {
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
    this.postService.post(this.url, object).subscribe(async result => {
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
