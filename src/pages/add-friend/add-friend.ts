import { Component } from '@angular/core';
import { NavController, AlertController, ItemSliding, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import firebase from 'firebase';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AddressPage } from '../address/address';

@Component({
  selector: 'page-add-friend',
  templateUrl: 'add-friend.html'
})
export class AddFriendPage {
  name = '';
  number = '';

  constructor(public navCtrl: NavController, public af: AngularFireDatabase) {
    const userId:string = firebase.auth().currentUser.uid;
  }
  goToAddress(params){
    if (!params) params = {};
    this.navCtrl.push(AddressPage);
  }
  addFriend(){
    const userId:string = firebase.auth().currentUser.uid;    
    this.af.list(`/userProfile/${userId}/friends`).push(
      { name: this.name,
      number: this.number
      });  
      this.navCtrl.push(AddressPage);  
      this.name = '';
      this.number = '';    
  }
}