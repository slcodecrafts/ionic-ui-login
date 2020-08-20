import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LangService } from './lang.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  dir: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private lang: LangService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#ee4659');
      this.splashScreen.hide();

      let lng = localStorage.getItem('lng');
      let dir = localStorage.getItem('dir');
      
      this.dir = dir;

      if (!lng && !dir) {
        localStorage.setItem('lng', 'en');
        localStorage.setItem('dir', 'ltr');
        this.lang.setDefaultLang();
      } else {
        this.lang.changeLang(lng, dir);
      }

      this.lang.getDirection().subscribe((data) => {
        this.dir = data;
      });
    });
  }
}
