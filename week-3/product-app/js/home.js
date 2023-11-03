/*
  Author: Professor Krasso
  Date: 11/3/2023
  File Name: home.js
  Description: Class for the Home object
*/

"use strict"; // Interpret contents in JavaScript strict mode

// Export the Home class for use in other files in the application (e.g., index.js)
export class Home {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}