import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from './lang.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private lang: LangService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#ee4659');
      this.splashScreen.hide();

      let lng = localStorage.getItem('lng');
      console.log("def Lang", lng);
      if (!lng) {
        localStorage.setItem('lng', 'en');
        this.lang.setDefaultLang();
      } else {
        this.lang.changeLang(lng);
      }
    });
  }
}
