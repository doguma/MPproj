import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewNotificationsPagePage } from '../new-notifications-page/new-notifications-page';
import { CurrentAppointmentsPagePage } from '../current-appointments-page/current-appointments-page';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = NewNotificationsPagePage;
  tab2Root: any = CurrentAppointmentsPagePage;
  constructor(public navCtrl: NavController) {
  }
  
}
