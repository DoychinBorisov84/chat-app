import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ChatPage } from '../pages/chat/chat';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';



// 1) We import this from our project in Google-Firebase. It is our Credentials for FireBase.WE USE AngularFire2@ for the app
var firebaseConfig = {
   apiKey: "AIzaSyAvzYX2SF4kmJII6pnFXTJT5rB-uviBuu0",
   authDomain: "chat-app-337c2.firebaseapp.com",
   databaseURL: "https://chat-app-337c2.firebaseio.com",
   projectId: "chat-app-337c2",
   storageBucket: "",
   messagingSenderId: "198591638995"
 };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, Firebase
  ]
})
export class AppModule {}
