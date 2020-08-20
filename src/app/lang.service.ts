import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  private language = new Subject<any>();

  constructor(
    private translate: TranslateService,
  ) { }

  setDefaultLang() {
    console.log("Setting def lang")
    this.translate.setDefaultLang('en');
    this.language.next('en');
  }

  changeLang(lng) {
    console.log("Changing def lang", lng)

    this.translate.setDefaultLang(lng);
    localStorage.setItem('lng', lng);
    this.language.next(lng);
  }

  getLanguage(): Subject<any> {
    return this.language;
  }
}
