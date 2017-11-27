import { Component } from '@angular/core';
import { NavController, AlertController, ItemSliding, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import firebase from 'firebase';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';




@Component({
  selector: 'page-my-hours',
  templateUrl: 'my-hours.html'
})
export class MyHoursPage {
  
    message: string = '';
    s;
    messages: object[] = [];
    dodate: string = '';
    dotime: string = '';


    constructor(public db: AngularFireDatabase,
      public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController) {

      const userId:string = firebase.auth().currentUser.uid;

        this.s = this.db.list(`/userProfile/${userId}/hours`).subscribe( data => {
          this.messages = data;
        });
      }

      // const userId:string = firebase.auth().currentUser.uid; 
      // firebase.database().ref(`/userProfile/${userId}`).off();

 
      sendMessage() {
        const userId:string = firebase.auth().currentUser.uid;

       this.db.list(`/userProfile/${userId}/hours`).push({
          message: this.message,
          dodate: this.dodate,
          dotime: this.dotime
        }).then( () => {
          // message is sent
        }).catch( () => {
          // some error. maybe firebase is unreachable
        });

        this.message = '';
        this.dodate = '';
        this.dotime = '';
      }
}
