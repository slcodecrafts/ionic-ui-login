import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { RegisterPage } from '../register/register.page';
import { LanguagePage } from '../language/language.page';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  language: any;

  constructor(
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    let lng = localStorage.getItem('lng');

    this.language = (lng == 'en') ? 'English':'Arabic';
  }

  async login() {
    const modal = await this.modalCtrl.create({
      component: LoginPage,
      animated: true,
      mode: 'ios',
      cssClass: 'my-custom-login-modal-css',
      backdropDismiss: true,
    });

    return await modal.present();
  }

  async register() {
    const modal = await this.modalCtrl.create({
      component: RegisterPage,
      animated: true,
      mode: 'ios',
      cssClass: 'my-custom-register-modal-css',
      backdropDismiss: true,
    });

    return await modal.present();
  }

  async lang() {
    const modal = await this.modalCtrl.create({
      component: LanguagePage,
      animated: true,
      mode: 'ios',
      cssClass: 'my-custom-lang-modal-css',
      backdropDismiss: true,
    });

    return await modal.present();
  }

}
