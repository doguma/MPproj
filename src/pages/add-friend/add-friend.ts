import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddressPage } from '../address/address';

@Component({
  selector: 'page-add-friend',
  templateUrl: 'add-friend.html'
})
export class AddFriendPage {

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
