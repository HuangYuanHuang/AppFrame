import {Component} from '@angular/core';

import {NavController, NavParams, AlertController, ModalController} from 'ionic-angular';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
           
              private modalCtrl: ModalController,
              private alertCtrl: AlertController) {
  }

  clearCache() {
    this.alertCtrl.create({
      title: '确认清除缓存？',
      subTitle: '清除后需要重新登录',
      buttons: [{text: '取消'},
        {
          text: '确定',
          handler: () => {
           // Utils.sessionStorageClear();
           
         /*   let modal = this.modalCtrl.create("LoginPage");
            modal.present();
            modal.onDidDismiss(data => {
              this.navCtrl.popToRoot();
            });*/
          }
        }
      ]
    }).present();
  }


  changePassword() {
   /* let modal = this.modalCtrl.create(ChangePasswordPage);
    modal.present();
    modal.onDidDismiss(data => {
    });
    */
  }


}
