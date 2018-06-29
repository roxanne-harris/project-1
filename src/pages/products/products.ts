import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/product';
import { ProductPage } from '../product/product';
import { ProductService } from '../../services/product.service';
import { CartPage } from '../cart/cart';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  // set type for class variables
  public products: Array<Product>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public productService: ProductService
  ) {

    this.products = [];

    // right now, does not have dependacies
    // var productService = new ProductService();
    this.products = productService.getAllProducts();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  navigateToProduct(product: Product) {
    this.navCtrl.push(ProductPage, {
      productParameter: product
    });
  }

  navigateToCart() {
    this.navCtrl.push(CartPage);
  }

  navigateToProfile() {
    this.navCtrl.push(ProfilePage);
  }

}
