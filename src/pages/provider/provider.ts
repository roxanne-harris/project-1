import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the ProviderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-provider',
  templateUrl: 'provider.html',
})

export class ProviderPage {

  public items: Array<Course> = [];
  static item: Course;
  item: Course;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.items = [
      new Course(
        "CPSC 223",
        "Topics include programming in C; data structures (arrays, stacks, queues, lists, trees, heaps, graphs); sorting and searching; storage allocation and management; data abstraction; programming style; testing and debugging; writing efficient programs.",
        "James Aspnes",
        "CPSC 201"
      ),
      new Course(
        "CPSC 201",
        "Introduction to the concepts, techniques, and applications of computer science. Topics include computer systems (the design of computers and their languages); theoretical foundations of computing (computability, complexity, algorithm design); and artificial intelligence (the organization of knowledge and its representation for efficient search). Examples stress the importance of different problem-solving methods.",
        "Stephen Slade",
        "CPSC 112"
      ),
      new Course(
        "CPSC 202",
        "Introduction to formal methods for reasoning and to mathematical techniques basic to computer science. Topics include propositional logic, discrete mathematics, and linear algebra. Emphasis on applications to computer science: recurrences, sorting, graph traversal, Gaussian elimination.",
        "James Aspnes",
        "None"
      )
    ];
  }

  
  itemSelected(selectedItem: Course) {
    ProviderPage.item = selectedItem;
    this.navCtrl.push(DetailsPage);
  }

  navigateToProfile() {
    console.log("Profiling...");

    // this.navCtrl.push(ProfilePage);
    this.navCtrl.setRoot(ProfilePage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderPage');
  }

}

class Course {
  public name: string;
  public description: string;
  public professor: string;
  public prereqs: string;
  constructor(name: string, description: string, professor: string, prereqs: string) {
    this.name = name;
    this.description = description;
    this.professor = professor;
    this.prereqs = prereqs;
  }
}

