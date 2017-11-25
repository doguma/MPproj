import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddMoreHoursPage } from '../add-more-hours/add-more-hours';

@Component({
  selector: 'page-my-hours',
  templateUrl: 'my-hours.html'
})
export class MyHoursPage {

  constructor(public navCtrl: NavController) {
  }
  goToAddMoreHours(params){
    if (!params) params = {};
    this.navCtrl.push(AddMoreHoursPage);
  }
}
