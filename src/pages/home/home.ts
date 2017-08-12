import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

username: string = '';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  // Alert Message with title and message to display
  showAlert(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
}

// Check for the input with RegEx if we have only num+symbols
  loginUser() {
    if(/^[a-zA-Z0-9]+$/.test(this.username)){
      //if OK push us to the ChatPage with param{username}
      this.navCtrl.push(ChatPage, { username: this.username} );
    }else {
      this.showAlert('Error', 'Invalid Username');
    }

  }

}
