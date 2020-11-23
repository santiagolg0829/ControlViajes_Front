
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { PostService } from '../services/post/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public loginForm: FormGroup;
  private url = "Account/login";

  constructor(private router: Router,
    private storage: Storage,
    private postService: PostService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() {
  }

  login(loginForm: any) {
    this.postService.post(this.url, loginForm).subscribe(async result => {
      if (result.success) {
        this.storage.clear();
        this.storage.set('token', result.token);
        this.storage.set('expiration', result.expiration);
        this.storage.set('nombre', result.nombre);
        this.loginForm.reset();
        this.router.navigate(['/usuarios']);
      } else {
        const toast = await this.toastCtrl.create({
          message: result.message,
          position: "middle",
          color: "danger",
          buttons: [{
            text: 'Aceptar',
            role: 'cancel'
          }
          ]
        });
        toast.present();
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

}