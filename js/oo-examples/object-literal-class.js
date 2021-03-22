/*
============================================
; Title:  object-literal-class.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Refresher on object literal classes
;===========================================
*/

let house = {
  bedrooms: 4,
  bathrooms: 2,
  color: "White",
  getDetails: function() {
    return (
      this.bedrooms +
      " bedroom, " +
      this.bathrooms +
      " bath " +
      this.color +
      " house."
    );
  }
};

console.log(house.getDetails());
