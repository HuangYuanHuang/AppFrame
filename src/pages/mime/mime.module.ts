import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IonicPageModule } from 'ionic-angular';
import { MimePage } from './mime';
import { SettingPage } from "./setting/setting";
import {MessagePage} from "./message/message"
@NgModule({
  imports: [IonicModule],
  declarations: [MimePage, SettingPage,MessagePage],
  entryComponents: [MimePage,SettingPage,MessagePage],
  exports: [IonicModule]


})
export class MimePageModule { }
