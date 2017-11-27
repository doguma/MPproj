import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
 
@Injectable()
export class FirebaseProvider {
 
  constructor(public db: AngularFireDatabase) { }
 
  getMyHours() {
    return this.db.list('/myHours/');
  }
 
  addHour(name) {
    this.db.list('/myHours/').push(name);
  }
 
  removeHour(id) {
    this.db.list('/myHours/').remove(id);
  }
}