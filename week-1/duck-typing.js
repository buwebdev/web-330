/*
============================================
; Title:  duck-typing.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates how to create interfaces
;              in a JavaScript program.
;===========================================
*/

/**
 * Description: Ford class
 * @param model
 * @param year
 * @constructor
 */
function Ford(model, year) {
  this.model = model;
  this.year = year;
}

/**
 * Description: Chevy class
 * @param model
 * @param year
 * @constructor
 */
function Chevy(model, year) {
  this.model = model;
  this.year = year;
}

/**
 * Description: Nissan class
 * @param model
 * @param year
 * @constructor
 */
function Nissan(model, year) {
  this.model = model;
  this.year = year;
}

// Array of vehicles
let vehicles = [
  new Ford('F-150', '2019'),
  new Chevy('Silverado', '2019'),
  new Nissan('Titan', '2019')
];

// Loop over the vehicles array and output the results
let index = 1;
for (let x = 0; x < vehicles.length; x++) {
  console.log(index + '. ' + vehicles[x].year + ' ' + vehicles[x].constructor.name + ' ' + vehicles[x].model);
  index++;
}

