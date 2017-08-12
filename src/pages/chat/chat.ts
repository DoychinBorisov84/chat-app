import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  loginUser: string = '';
  message: string = '';

  chatSubscriptionListener: any;
  messages: object[] = [] ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: AngularFireDatabase) {

// get data from Home
    this.loginUser = this.navParams.get('username');

    // Create subscription listener for changes into our DB-Firebase ==> We are using .ourFirebaseDB.object('/rootNameInOurDatabase').subscribe to the DataObject in return from the Database
    this.chatSubscriptionListener = this.database.list('/chats').subscribe( data => {
    this.messages = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');

    this.database.list('/chats').push({
      specialMessage: true,
      message: `${this.loginUser} has joined the room`
    })
  }

  ionViewWillLeave() {
    // When the user click the back-button
    // console.log('I am leaving folks');
    this.chatSubscriptionListener.unsubscribe();

    this.database.list('/chats').push({
      specialMessage: true,
      message: `${this.loginUser} has left the room`
    })
  }

  sendMessage() {
    // Creating and pushing to Firebase Database with params(usenrame, message). MAKE SURE we ENABLE-TRUE-> Rules in Firebase Database-Tab
      this.database.list('/chats').push({
        loginUser: this.loginUser,
        message: this.message
      }).then( () => {
        //Message is sent

      }).catch( () => {
        // Some Error, maybe Fireabase is unreacheable

      });
      // Clear the input wih blank message after hit Send-button
      this.message = '';
  }


}
