
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import firebase from 'firebase';

import { CurrentAppointmentsPagePage} from '../../pages/current-appointments-page/current-appointments-page'

@Component({
  selector: 'page-matching',
  templateUrl: 'matching.html'
})
export class MatchingPage {
  public countryList:Array<any>;
  public loadedCountryList:Array<any>;
  public countryRef:firebase.database.Reference;

  memo: string = '';
  date: string = '';
  freetime: string = '';
  nickname: string = '';
  nickname2: string = '';


  constructor(public db: AngularFireDatabase, public navCtrl: NavController) {
    this.countryRef = firebase.database().ref('/randomHours');

    this.countryRef.on('value', countryList => {
      let countries = [];
      countryList.forEach( country => {
        countries.push(country.val());
        return false;
      });

      this.countryList = countries;
      this.loadedCountryList = countries;
    });
  }

  setMeeting() {
    const userId:string = firebase.auth().currentUser.uid;

   this.db.list(`/randomMeetings`).push({
      memo: this.memo,
      date: this.date,
      freetime: this.freetime,
      nickname: this.nickname,
      nickname2: this.nickname2
    }).then( () => {

      // message is sent
    }).catch( () => {
      // some error. maybe firebase is unreachable
    });
    
    this.db.list(`/userProfile/${userId}/meetings`).push({
      memo: this.memo,
      date: this.date,
      freetime: this.freetime,
      nickname: this.nickname,
      nickname2: this.nickname2
    }).then( () => {

      // message is sent
    }).catch( () => {
      // some error. maybe firebase is unreachable
    });

    this.memo = '';
    this.date = '';
    this.freetime = '';
    this.nickname = '';
    this.nickname2 = '';


    this.navCtrl.push(CurrentAppointmentsPagePage); 
  }


  initializeItems(){
    this.countryList = this.loadedCountryList;
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();
    
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;


    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }

    this.countryList = this.countryList.filter((v) => {
      if(v.nickname && q) {
        if (v.nickname.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    console.log(q, this.countryList.length);

  }

}