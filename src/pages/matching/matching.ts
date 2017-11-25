import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeoplePage } from '../people/people';

@Component({
  selector: 'page-matching',
  templateUrl: 'matching.html'
})
export class MatchingPage {

  constructor(public navCtrl: NavController) {
  }
  goToPeople(params){
    if (!params) params = {};
    this.navCtrl.push(PeoplePage);
  }goToMatching(params){
    if (!params) params = {};
    this.navCtrl.push(MatchingPage);
  }
}
