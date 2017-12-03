import { Component } from '@angular/core';
import { NavController, AlertController, ItemSliding, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { MatchingPage } from '../../pages/matching/matching';

import firebase from 'firebase';

@Component({
  selector: 'page-current-appointments-page',
  templateUrl: 'current-appointments-page.html'
})
export class CurrentAppointmentsPagePage {

  memo: string = '';
  date: string = '';
  freetime: string = '';
  nickname: string = '';
  nickname2: string = '';
  s;
  t;

  messages: object[] = [];

  constructor(public db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams,
  private alertCtrl: AlertController) {

    const userId:string = firebase.auth().currentUser.uid;

      this.s = this.db.list(`/userProfile/${userId}/meetings`,{
        query: {
          orderByChild: 'date'
        }
      }).subscribe( data => {
        this.messages = data;
      });


      
    }
    goToMatching(params){
      if (!params) params = {};
      this.navCtrl.push(MatchingPage);
    }
   
}
