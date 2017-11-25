import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddFriendPage } from '../add-friend/add-friend';

@Component({
  selector: 'page-address',
  templateUrl: 'address.html'
})
export class AddressPage {

  constructor(public navCtrl: NavController) {
  }
  goToAddFriend(params){
    if (!params) params = {};
    this.navCtrl.push(AddFriendPage);
  }goToAddress(params){
    if (!params) params = {};
    this.navCtrl.push(AddressPage);
  }
}
