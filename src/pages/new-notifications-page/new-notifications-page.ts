import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MatchingPage } from '../../pages/matching/matching';

@Component({
  selector: 'page-new-notifications-page',
  templateUrl: 'new-notifications-page.html'
})
export class NewNotificationsPagePage {

  constructor(public navCtrl: NavController) {
  }
  goToMatching(params){
    if (!params) params = {};
    this.navCtrl.push(MatchingPage);
  }
}
