import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProductsPage } from '../products/products';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})


export class ProfilePage {

  constructor(public navCtrl: NavController) {}

  navigateToHomePop() {
    console.log("Home...");
    this.navCtrl.pop();
    this.navCtrl.pop();
  }

  navigateToHomePush() {
    console.log("Home...");
    this.navCtrl.push(HomePage);
  }

  navigateToHomeSetRoot() {
    console.log("Home...");
    this.navCtrl.setRoot(HomePage);
  }

  navigateToProductsSetRoot() {
    this.navCtrl.setRoot(ProductsPage);
  }

  

}


/*

*/
