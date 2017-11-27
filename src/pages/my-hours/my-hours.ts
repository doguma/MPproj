import { Component } from '@angular/core';
import { NavController, ItemSliding, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import { FirebaseProvider } from './../../providers/firebase/firebase';

import firebase from 'firebase';

@Component({
  selector: 'page-my-hours',
  templateUrl: 'my-hours.html'
})
export class MyHoursPage {
  
    username: string = '';
    message: string = '';
    s;
    messages: object[] = [];
    dodate: string = '';
    dotime: string = '';

    

    constructor(public db: AngularFireDatabase,
      public navCtrl: NavController, public navParams: NavParams) {
 
        var user = firebase.auth().currentUser;
 
        this.s = this.db.list('/userProfile/user/hours').subscribe( data => {
          this.messages = data;
        });


      }
  
      sendMessage() {
        this.db.list('/userProfile/user/hours').push({
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
