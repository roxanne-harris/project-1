import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product'
import { CheckoutPage } from '../checkout/checkout';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  public products: Array<Product>;
  public totalAmount: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cartService: CartService
  ) {
    this.products = cartService.getAllProducts();
    this.totalAmount = cartService.getTotalAmount();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  navigateToCheckOut() {
    this.navCtrl.push(CheckoutPage);
  }


}
