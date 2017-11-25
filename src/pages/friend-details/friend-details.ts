import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddressPage } from '../address/address';
import { AddFriendPage } from '../add-friend/add-friend';

@Component({
  selector: 'page-friend-details',
  templateUrl: 'friend-details.html'
})
export class FriendDetailsPage {

  constructor(public navCtrl: NavController) {
  }
  goToAddress(params){
    if (!params) params = {};
    this.navCtrl.push(AddressPage);
  }goToAddFriend(params){
    if (!params) params = {};
    this.navCtrl.push(AddFriendPage);
  }
}
