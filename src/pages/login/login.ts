import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage {

  constructor(public navCtrl: NavController) {}

  navigateToProfile() {
    console.log("Profiling...");

    // this.navCtrl.push(ProfilePage);
    this.navCtrl.setRoot(ProfilePage);
  }

  navigateToRegistration() {
    console.log("Registrating...");

    this.navCtrl.push(RegistrationPage);
  }



}


/*

*/
