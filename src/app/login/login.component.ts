
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { PostService } from '../services/post/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GenericService } from '../utils/genericService';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends GenericService implements OnInit {

  public email: string;
  public password: string;
  public loginForm: FormGroup;
  private url = "Account/login";
  public clicked: boolean;

  constructor(private router: Router,
    private storage: Storage,
    public postService: PostService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private firebase: FirebaseX,
    public platform: Platform) {
    super(null, postService, null, toastCtrl, modalCtrl);
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
    this.clicked = false;
  }

  ngOnInit() {

  }


  checkDevice(loginForm: any) {
    this.clicked = true;
    if (this.platform.is("desktop")) {
      this.login(loginForm, null);
    } else if (this.platform.is("mobile")) {
      this.firebase.getToken()
        .then(token => {
          this.login(loginForm, token)
        }) // save the token server-side and use it to push notifications to this device
        .catch(async error => {
          console.error('Error getting Firebase Token', error);
          const toast = await this.toastCtrl.create({
            message: error,
            position: "middle",
            duration: 3000,
            color: "danger"
          });
          toast.present();
          this.clicked = false;
        });
    }

  }

  login(loginForm: any, tokenFirebase) {
    loginForm.tokenFirebase = tokenFirebase;
    this.postService.post(this.url, loginForm).subscribe(async result => {
      if (result.success) {
        this.storage.clear().then(resultStorage => {
          this.storage.set('token', result.message.token);
          this.storage.set('expiration', result.message.expiration);
          this.storage.set('nombre', result.message.nombre);
          this.storage.set('roles',result.message.roles);
          this.loginForm.reset();
          this.router.navigate(['/mis-viajes']);
          this.clicked = false;
        });
      } else {
        this.showModalError(result.message);
        this.clicked = false;
      }
    }, async error => {
      this.showModalError(error.message);
      this.clicked = false;
    });
  }

}