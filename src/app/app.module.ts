import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NewNotificationsPagePage } from '../pages/new-notifications-page/new-notifications-page';
import { CurrentAppointmentsPagePage } from '../pages/current-appointments-page/current-appointments-page';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { MatchingPage } from '../pages/matching/matching';
import { PeoplePage } from '../pages/people/people';
import { AddressPage } from '../pages/address/address';
import { FriendDetailsPage } from '../pages/friend-details/friend-details';
import { AddFriendPage } from '../pages/add-friend/add-friend';
import { AddMoreHoursPage } from '../pages/add-more-hours/add-more-hours';
import { MyHoursPage } from '../pages/my-hours/my-hours';

import { LoginPage } from '../pages/login/login';
// import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { EventCreatePage } from '../pages/event-create/event-create';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { EventListPage } from '../pages/event-list/event-list';


import { AuthProvider } from '../providers/auth/auth';
import { EventProvider } from '../providers/event/event';
import { ProfileProvider } from '../providers/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    NewNotificationsPagePage,
    CurrentAppointmentsPagePage,
    TabsControllerPage,
    MatchingPage,
    PeoplePage,
    AddressPage,
    FriendDetailsPage,
    AddFriendPage,
    AddMoreHoursPage,
    MyHoursPage,
    LoginPage,
    EventCreatePage, EventDetailPage, EventListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewNotificationsPagePage,
    CurrentAppointmentsPagePage,
    TabsControllerPage,
    MatchingPage,
    PeoplePage,
    AddressPage,
    FriendDetailsPage,
    AddFriendPage,
    AddMoreHoursPage,
    MyHoursPage,
    LoginPage,
    EventCreatePage, EventDetailPage, EventListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    EventProvider,
    ProfileProvider
  ]
})
export class AppModule {}