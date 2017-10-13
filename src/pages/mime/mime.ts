import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingPage } from "./setting/setting";
import {MessagePage} from "./message/message"
@IonicPage()
@Component({
  selector: 'page-mime',
  templateUrl: 'mime.html',
})
export class MimePage {
  avatarPath: String = "./assets/img/avatar.png";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MimePage');
  }
  setting() {
    this.navCtrl.push(SettingPage);
  }
}
