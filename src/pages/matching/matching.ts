import { Component } from '@angular/core';
import { NavController, AlertController, ItemSliding, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import firebase from 'firebase';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { PeoplePage } from '../../pages/people/people'; 

@Component({
  selector: 'page-matching',
  templateUrl: 'matching.html'
})
export class MatchingPage {

  s;
  name: string = '';
  number: string = '';
  messages : object[] = [];
  myFriends: object[] = [];

  memo: string = '';
  date: string = '';
  freetime: string = '';

  constructor(public db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams,
  private alertCtrl: AlertController) {

    const userId:string = firebase.auth().currentUser.uid;

    this.s = this.db.list(`/userProfile/${userId}/friends/`,{
      query: {
        orderByChild: 'name'
      }
    }).subscribe( data => {
      this.myFriends = data;
    });

  }



  sendFriend() {
    this.db.list(`/userProfile/username`,{
      query: {
        orderByChild: 'date',
        equalTo: `${this.name}`
      }
    }).push({
      memo: this.memo,
      date: this.date,
      freetime: this.freetime
    }).then( data => {
      this.messages = data;
    }).catch( () => {
      // some error. maybe firebase is unreachable
    });

    this.memo = '';
    this.date = '';
    this.freetime = '';
  }
  


  goToPeople(params){
    if (!params) params = {};
    this.navCtrl.push(PeoplePage);
  }goToMatching(params){
    if (!params) params = {};
    this.navCtrl.push(MatchingPage);
  }

}
