import { Component } from '@angular/core';
import {
    IonicPage,
    NavController,
    NavParams,
    Loading,
    LoadingController,
    Alert,
    AlertController
} from 'ionic-angular';

import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { LoginPage } from '../login/login';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Component({
    selector: 'page-username',
    templateUrl: 'username.html',
})
export class UsernamePage {

    username: string = '';
    usernumber: string = '';

    constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController){
    }

    sendUsername() {
        const userId:string = firebase.auth().currentUser.uid;

    firebase.database().ref(`/userProfile/${userId}/username`)
        .set(this.username)
        .catch( error => console.error(error) );
   
    firebase.database().ref(`/userProfile/${userId}/usernumber`)
    .set(this.usernumber)
    .catch( error => console.error(error) );    

    
        this.username = '';
        this.usernumber = '';

        this.navCtrl.setRoot(LoginPage);
      }


    }
