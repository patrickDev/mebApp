import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NjanguiPage } from '../pages/njangui/njangui';
import { SagiPage } from '../pages/sagi/sagi';
import { AssurancePage } from '../pages/assurance/assurance';
import { FondRoulementPage } from '../pages/fond-roulement/fond-roulement';
import { BanqueScolairePage } from '../pages/banque-scolaire/banque-scolaire';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MebamApiProvider } from '../providers/mebam-api/mebam-api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NjanguiPage,
    SagiPage,
    AssurancePage,
    FondRoulementPage,
    BanqueScolairePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NjanguiPage,
    SagiPage,
    AssurancePage,
    FondRoulementPage,
    BanqueScolairePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MebamApiProvider
  ]
})
export class AppModule {}
