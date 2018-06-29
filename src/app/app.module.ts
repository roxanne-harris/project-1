import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, MenuController } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { ProfilePage } from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductsPage } from '../pages/products/products';
import { ProductPage } from '../pages/product/product';
import { ProductService } from '../services/product.service';
import { CartPage } from '../pages/cart/cart';
import { CartService } from '../services/cart.service';
import { CheckoutPage } from '../pages/checkout/checkout';




// figure out different ways of adding a page
// easier more automatic way

// ionic and most other mobile frameworks use "stack" to navigate backwards
// LoginPage is on top of HomePage allowing us to navigate back
// Stack: last in, first out
// that is why we have functions: push() and pop() in home.ts referencing login.ts

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegistrationPage,
    ProfilePage,
    ProductsPage,
    ProductPage,
    CartPage,
    CheckoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: HomePage, name: 'Home', segment: 'home' },
        { component: LoginPage, name: 'Login', segment: 'login' },
        { component: RegistrationPage, name: 'Registration', segment: 'registration' },
        { component: ProfilePage, name: 'Profile', segment: 'profile' },
        { component: ProductsPage, name: 'Products', segment: 'products'},
        //{ component: ProductPage, name: 'Product', segment: 'product'}
      ]
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegistrationPage,
    ProfilePage,
    ProductsPage,
    ProductPage,
    CartPage,
    CheckoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProductService,
    CartService,
    MenuController,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
