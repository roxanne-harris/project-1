import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service'

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  public product: Product;
  public imageUrl: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cartService: CartService
  ) {
    this.product = this.navParams.get("productParameter"); // new Product();
    this.imageUrl = this.product.imageUrl;
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  goBack(product: Product) {
    this.navCtrl.pop();
    this.cartService.addProduct(product);
  }

}
