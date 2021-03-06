import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';

import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { AddressPage } from '../pages/address/address';
import { MyHoursPage } from '../pages/my-hours/my-hours';
import { LoginPage } from '../pages/login/login';
import { MatchingPage } from '../pages/matching/matching';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp({ 
      apiKey: "AIzaSyCM-XS_novOHXT9iBDm7ba82fkTf-n7vbc",
      authDomain: "eventmanager-fdb05.firebaseapp.com",
      databaseURL: "https://eventmanager-fdb05.firebaseio.com",
      projectId: "eventmanager-fdb05",
      storageBucket: "",
      messagingSenderId: "589314051524" 
    });    
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // const unsubscribe = firebase.auth().onAuthStateChanged( user => { 
    //   if(!user){
    //   this.rootPage = LoginPage;
    //   unsubscribe(); 
    // }else{
    //   this.rootPage = TabsControllerPage; 
    //   unsubscribe();
    //   } }); 



  }
  goToNewNotificationsPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TabsControllerPage);
  }

  goToAddressPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AddressPage);
  }

  goToMyHoursPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MyHoursPage);
  }
  


}
