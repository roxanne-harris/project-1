import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage {
  

  public email: string;
  public password: string;

  public names: Array<string>;
  public complexObject: any;

  // this.flag = true;
  public flag: boolean = true;

  constructor(public navCtrl: NavController) {
    //this.email = "roxanne.harris@yale.edu";
    //this.password = "whatever";

    this.names = [
      "Roxanne",
      "Rainier",
      "Richard"
    ];

    this.names.push("Eric");

    this.complexObject = {
      
    }
  
  }

  
  navigateToProfile() {
    console.log("Profiling...");

    // this.navCtrl.push(ProfilePage);
    this.navCtrl.setRoot(ProfilePage);
  }

  navigateToRegistration() {
    console.log("Registrating...");

    this.navCtrl.push(RegistrationPage);
  }

  /*

  pressMe(argument1: string, argument2: number) {
    console.log("The email is: " + this.email);

    console.log("Argument 1:", argument1);
    console.log("Argument 2:", argument2);

  }

  loopOne() {

    for (var i = 0; i < this.names.length; i++) {
      console.log("Element: ", this.names[i]);
    }

    console.log("First element: ", this.names[0]);

  }

  loopTwo() {
    this.names.forEach((item) => {
      console.log("Element: ", item);
    });
  }

  login() {

    var age: any = 1;
    if(age === 1) {
      // False
    }
    if(age == 1){
      // True
    }
    if (this.password == "my-secure-password") {
      // Navigate
    } else {
      // Stay here...
    }
  }
  */


}
/*
class Animal {

  // data type = basic definition of a variable
  type: string;

  // number is any real number, we very high range (can be either )
  public age: number;

  // very dynamic like JavaScript, can change the variable type in runtime
  something: any;

  // Constructor runs everytime we instantiate or recreate class
  constructor(type: string) {
    this.type = type;
    this.type = "I am a dog";
    this.age = 1;
    this.age = 5.6;
  }

  makeNoise() {
    console.log("Making noise");

    // constructor can't access this, scope is very important, only defined as local var inside this function
    var bankBalance = 0;
    bankBalance = 500;
  }
}

// inheritance example
class Dog extends Animal {

  // this variable is this class, which is cool
  someAnimal: Animal;

  constructor() {
   // new Animal("dog");

   // doing the same thing as instantiation
   super("dog");

   //initializes variables
  }
}
// Instance is a variable in an instantiated class
var dog = new Animal("dog");
dog.makeNoise();
dog.age = 0;

var cat = new Animal("cat");

var doggy = new Dog();
*/

