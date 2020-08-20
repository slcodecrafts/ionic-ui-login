import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  private language = new Subject<any>();
  private direction = new Subject<any>();

  dir = 'ltr';

  constructor(
    private translate: TranslateService,
  ) { }

  setDefaultLang() {
    this.translate.setDefaultLang('en');
    this.language.next('en');
    this.direction.next('ltr');
  }

  changeLang(lng, dir) {
    this.translate.setDefaultLang(lng);
    localStorage.setItem('lng', lng);
    localStorage.setItem('dir', dir);
    this.language.next(lng);
    this.direction.next(dir);
  }

  getLanguage(): Subject<any> {
    return this.language;
  }

  getDirection(): Subject<any> {
    return this.direction;
  }
}
