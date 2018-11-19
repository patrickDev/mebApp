import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { NjanguiPage } from '../pages/njangui/njangui';
import { SagiPage } from '../pages/sagi/sagi';
import { AssurancePage } from '../pages/assurance/assurance';
import { FondRoulementPage } from '../pages/fond-roulement/fond-roulement';
import { BanqueScolairePage } from '../pages/banque-scolaire/banque-scolaire';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen
    //public navCtrl: NavController
    ) {
    
      this.initializeApp();
  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  goHome(){
    //this.navCtrl.popToRoot()
  }
  goToNjangui(){
    this.nav.push(NjanguiPage)
  }

  goToAssurance(){
    this.nav.push(AssurancePage)
  }
  goToSagi(){
    this.nav.push(SagiPage)
  }
  goToFondRoulement(){
    this.nav.push(FondRoulementPage)
  }
  goToBanqueScolaire(){
    this.nav.push(BanqueScolairePage)
  }
}
