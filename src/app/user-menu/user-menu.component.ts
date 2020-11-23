import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, ModalController } from '@ionic/angular';

import { Storage } from '@ionic/storage';

import { OverlayEventDetail } from '@ionic/core';
import { CambiarPasswordComponent } from '../cambiar-password/cambiar-password.component';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {

  public nombre: string;

  constructor(private storage: Storage, private router: Router, public toastCtrl: ToastController, public modalCtrl: ModalController) {

  }

  ngOnInit() {
    this.storage.get("nombre").then((val) => {
      this.nombre = val;
    });
  }

  logout() {
    this.storage.clear();
    this.router.navigate(['/login']);
  }

  async mostrarModal() {
    const modal = await this.modalCtrl.create({
      component: CambiarPasswordComponent,
      backdropDismiss: false
    });
    modal.present();
    await modal.onWillDismiss().then(async (result: OverlayEventDetail) => {
      if (result.data != null && result.data.success) {
        const toast = await this.toastCtrl.create({
          message: result.data.message,
          position: "middle",
          duration: result.data.success ? 3000 : 0,
          color: result.data.success ? "success" : "danger",
          buttons: result.data.success ? [] : [{
            text: 'Aceptar',
            role: 'cancel'
          }
          ]
        });
        toast.present();
      }
    });
  }

}
