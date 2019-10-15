/*
============================================
; Title:  factory-example1.js
; Author: Andy Osmani
; Modified By: Professor Krasso
; Date:   27 February 2019
; Description: Demonstrates the use of the Singleton Pattern
;              in a JavaScript program.
;===========================================
*/

var mySingleton = (function() {
  var instance;

  function init() {
    function privateMethod() {
      console.log("I am private");
    }

    var privateVariable = "I am also private";

    var privateRandomNumber = Math.random();

    return {
      publicMethod: function() {
        console.log("The public can see me!");
      },

      publicProperty: "I am also public",

      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  };
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log(singleA.getRandomNumber() === singleB.getRandomNumber());
