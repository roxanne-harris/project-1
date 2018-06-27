import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})


export class RegistrationPage {

  constructor(public navCtrl: NavController) {}

  navigateToProfile() {
    console.log("Profiling...");

    // this.navCtrl.push(ProfilePage);
    this.navCtrl.setRoot(ProfilePage);
  }

}


/*

*/
