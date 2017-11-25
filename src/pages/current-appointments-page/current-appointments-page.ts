import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MatchingPage } from '../../pages/matching/matching';

@Component({
  selector: 'page-current-appointments-page',
  templateUrl: 'current-appointments-page.html'
})
export class CurrentAppointmentsPagePage {

  constructor(public navCtrl: NavController) {
  }
  goToMatching(params){
    if (!params) params = {};
    this.navCtrl.push(MatchingPage);
  }
}
