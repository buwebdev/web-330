/*
============================================
; Title:  factory-example1.js
; Author: Professor Krasso
; Date:   27 February 2019
; Description: Demonstrates the use of the Singleton Pattern
;              in a JavaScript program.
;===========================================
*/

var DatabaseSingleton = (function() {
  var instance;

  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

function databaseInit() {
  var databaseInstance1 = DatabaseSingleton.getInstance();
  var databaseInstance2 = DatabaseSingleton.getInstance();

  console.log(
    "One database instance? " + (databaseInstance1 === databaseInstance2)
  );
}

databaseInit();

