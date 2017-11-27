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
  
    memo: string = '';
    date: string = '';
    stime: string = '';
    etime: string = '';

    s;

    messages: object[] = [];

    constructor(public db: AngularFireDatabase,
      public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController) {

      const userId:string = firebase.auth().currentUser.uid;

        this.s = this.db.list(`/userProfile/${userId}/hours`).subscribe( data => {
          this.messages = data;
        });
      }
 
      sendMessage() {
        const userId:string = firebase.auth().currentUser.uid;

       this.db.list(`/userProfile/${userId}/hours`).push({
          memo: this.memo,
          date: this.date,
          stime: this.stime,
          etime: this.etime
        }).then( () => {
          // message is sent
        }).catch( () => {
          // some error. maybe firebase is unreachable
        });

        this.memo = '';
        this.date = '';
        this.stime = '';
        this.etime = '';
      }


      removeMessage(slidingItem: ItemSliding, message: any){
        let index = this.messages.indexOf(message);
        if (index > -1){
          this.messages.splice(index,1);
      }  
      slidingItem.close();
    }
  }