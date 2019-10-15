/*
============================================
; Title:  function-class.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Refresher on function classes
;===========================================
*/

/**
 * Description: Function class refresher
 * @param bedrooms
 * @constructor
 */
function House(bedrooms) {
  this.bedrooms = bedrooms;
  this.color = "White";
  this.bathrooms = 2;

  this.getDetails = function() {
    return (
      this.bedrooms +
      " bedroom, " +
      this.bathrooms +
      " bath " +
      this.color +
      " house."
    );
  };
}

// Instantiate a new House class and pass-in the number of bedrooms as an argument
const house = new House(5);

// Output the results to the console debugger window.
console.log(house.getDetails());
