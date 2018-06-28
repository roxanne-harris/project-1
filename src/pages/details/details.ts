import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProviderPage } from '../provider/provider';


/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  public name: any;
  public description: string;
  public professor: string;
  public prereqs: string;



  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.name = ProviderPage.item.name;
    this.description = ProviderPage.item.description;
    this.professor = ProviderPage.item.professor;
  }


  goBack() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
