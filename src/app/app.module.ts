import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MimePageModule } from "../pages/mime/mime.module";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppVersion } from "@ionic-native/app-version";
import { Camera } from "@ionic-native/camera";
import { Toast } from "@ionic-native/toast";
import { File } from "@ionic-native/file";
import { Transfer } from "@ionic-native/transfer";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { ImagePicker } from "@ionic-native/image-picker";
import { Network } from "@ionic-native/network";
import { AppMinimize } from "@ionic-native/app-minimize";
import { NativeService } from '../providers/native-service';
import { Diagnostic } from "@ionic-native/diagnostic";
import { GlobalData } from "../providers/global-data";
import { Utils } from "../providers/system-utils";
import { Logger } from "../providers/system-logger";
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',//android是'md'
      backButtonText: ''
    }),
    MimePageModule
  ],
  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppVersion,
    Camera,
    Toast,
    File,
    Transfer,
    InAppBrowser,
    ImagePicker,
    Network,
    AppMinimize,
    Diagnostic,
    { provide: IonicErrorHandler, useClass: IonicErrorHandler },
    NativeService,
    Utils,
    GlobalData,
    Logger
  ]
})
export class AppModule { }
