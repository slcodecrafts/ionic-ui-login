import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor(
    private translate: TranslateService,
  ) { }

  setDefaultLang() {
    this.translate.setDefaultLang('en');
  }

  changeLang(lng) {
    this.translate.setDefaultLang(lng);
    localStorage.setItem('lng', lng);
  }
}
