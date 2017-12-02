import { Component } from '@angular/core';
import { NavController, AlertController, ItemSliding, NavParams } from 'ionic-angular';
import { AddFriendPage } from '../add-friend/add-friend';

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import firebase from 'firebase';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-address',
  templateUrl: 'address.html'
})
export class AddressPage {
  friends: FirebaseListObservable<any[]>;
  name: string;
  number: string;

  constructor(public navCtrl: NavController, public af: AngularFireDatabase) {
    const userId:string = firebase.auth().currentUser.uid;    
    this.friends = af.list(`/userProfile/${userId}/friends`);   
  }
  goToAddFriend(params){
    if (!params) params = {};
    this.navCtrl.push(AddFriendPage);
  }
  goToAddress(params){
    if (!params) params = {};
    this.navCtrl.push(AddressPage);
  }
  editFriend(slidingItem: ItemSliding, friend: Friend) {
  }
  removeFriend(slidingItem: ItemSliding, friend: Friend) {
  }
}

export class Friend {
  name: string;
  number: string;
  $key: any;
}
