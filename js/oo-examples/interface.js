/*
============================================
; Title:  interface.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates how to create interfaces
;              in a JavaScript program.
;===========================================
*/

/**
 * Description: Album function class
 * @param title
 * @param composer
 * @constructor
 */
function Album(title, composer) {
  this.title = title;
  this.composer = composer;
}

/**
 * Description: Prototype for adding Albums to the shopping cart
 */
Album.prototype.purchase = function() {
  console.log('Album added to shopping cart!');
};

/**
 * Description: CD function class
 * @param title
 * @param composer
 * @param price
 * @constructor
 */
function Cd(title, composer, price) {
  this.title = title;
  this.composer = composer;
  this.price = price;
}

/**
 * Description: Prototype for adding Cd's to the shopping cart
 */
Cd.prototype.purchase = function() {
  console.log('CD added to shopping cart!');
};

/**
 * Description: DVD function class
 * @param title
 * @param price
 * @param description
 * @constructor
 */
function Dvd(title, price, description) {
  this.title = title;
  this.price = price;
  this.description = description;
}

/**
 * Description: Prototype for adding Dvd's to the shopping cart
 */
Dvd.prototype.purchase = function() {
  console.log('DVD added to shopping cart!');
};

// Object declarations
let uriCaine = new Album('Uri Caine', 'Primal Light');
let blakeShelton = new Cd("If I'm Honest", 'Blake Shelton', 14.99);
let tron = new Dvd('TRON-LEGACY', 9.96, 'Action/Adventure');

// Array to hold all three classes (Album, Cd, and Dvd)
let purchased = [];

/**
 * Description: Receives a class an an argument, calls the purchase prototype, and adds the class to the purchased array.
 * @param item
 */
function purchaseIt(item) {
  item.purchase();
  purchased.push(item);
}

// Calls the purchaseIt function passing-in the objects defined in lines 70-72
purchaseIt(uriCaine);
purchaseIt(blakeShelton);
purchaseIt(tron);

// Display shopping cart
console.log(
  "\n-- The following items have been added to your shopping cart --"
);

// Loop over the array and output the results.
for (let k = 0; k < purchased.length; k++) {
  console.log(purchased[k].constructor.name + ": " + purchased[k].title);
}
