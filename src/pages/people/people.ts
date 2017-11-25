import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MatchingPage } from '../matching/matching';

@Component({
  selector: 'page-people',
  templateUrl: 'people.html'
})
export class PeoplePage {

  constructor(public navCtrl: NavController) {
  }
  goToMatching(params){
    if (!params) params = {};
    this.navCtrl.push(MatchingPage);
  }goToPeople(params){
    if (!params) params = {};
    this.navCtrl.push(PeoplePage);
  }
}
