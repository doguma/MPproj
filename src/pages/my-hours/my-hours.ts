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
    freetime: string = '';

    s;

    messages: object[] = [];

    constructor(public db: AngularFireDatabase,
      public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController) {

      const userId:string = firebase.auth().currentUser.uid;

        this.s = this.db.list(`/userProfile/${userId}/hours/`,{
          query: {
            orderByChild: 'date'
          }
        }).subscribe( data => {
          this.messages = data;
        });
      }
 
      sendMessage() {
        const userId:string = firebase.auth().currentUser.uid;

       this.db.list(`/userProfile/${userId}/hours`).push({
          memo: this.memo,
          date: this.date,
          freetime: this.freetime
        }).then( () => {
          // message is sent
        }).catch( () => {
          // some error. maybe firebase is unreachable
        });

        this.memo = '';
        this.date = '';
        this.freetime = '';
      }


    //   removeMessage(slidingItem: ItemSliding, messages: any){
    //     let index = this.messages.indexOf(messages);
    //     if (index > -1){
    //       this.messages.splice(index,1);
    //   }  
    //   slidingItem.close();
    // }
  }