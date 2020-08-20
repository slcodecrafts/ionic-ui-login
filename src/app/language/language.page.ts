import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  lng: any;

  constructor(
    public modalController: ModalController,
    public lang: LangService,
  ) { }

  ngOnInit() {
    this.lng = localStorage.getItem('lng');
  }

  toggleLanguage(lng) {
    this.lng = lng;
    this.lang.changeLang(lng);
  }

  async dismiss() {
    await this.modalController.dismiss();
  }

}
