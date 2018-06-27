import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';

// html linked to typescript class through this syntax
// html also knows, but does not know about our function
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

// allows us to group together common functionality into functions
// html has code to render what is on the screen
// typescript does the functionality for us
// we need to write a function/logic that initiates our page
export class HomePage {

  // a service that allows us to use navigation
  // this defines navCtrl
  constructor(public navCtrl: NavController) {}

  // helpful when debugging, check if buttons are working properly
  // all functions need parathentsises
  navigateToLogin() {
    console.log("Navigating...");

    // "this" keyword refers to class
    this.navCtrl.push(LoginPage);
  }

  navigateToRegistration() {
    console.log("Registrating...");

    this.navCtrl.push(RegistrationPage);
  }

}


/*
Extra challenge:
How to make user unable to navigate back
(e.g.) after the user logs in

SPA: one index.html, no concept of url to different page, virtual routes using URLs
When you navigate to LoginPage, does not change URLS
That is the second option to navigate pages

Everytime we refresh, returns to HomePage, how do we make it stay?
Get unique URLs for each page!!!
*/
