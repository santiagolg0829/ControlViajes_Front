
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { PostService } from '../services/post/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GenericService } from '../utils/genericService';

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
    private formBuilder: FormBuilder) {
    super(null, postService, null, toastCtrl, modalCtrl);
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
    this.clicked = false;
  }

  ngOnInit() {

  }


  login(loginForm: any) {
    this.clicked = true;
    this.postService.post(this.url, loginForm).subscribe(async result => {
      if (result.success) {
        this.storage.clear();
        this.storage.set('token', result.message.token);
        this.storage.set('expiration', result.message.expiration);
        this.storage.set('nombre', result.message.nombre);
        this.loginForm.reset();
        this.router.navigate(['/dashboard']);
      } else {
        this.showModalError(result.message);
      }
    }, async error => {
      this.showModalError(error.message);
    });
  }

}