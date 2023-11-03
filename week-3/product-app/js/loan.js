/*
  Student Name: Professor Krasso
  Date: 11/3/2023
  File Name: loan.js
  Description: Class for calculating the cost of a loan
*/

"use strict";

export class Loan{
  _homes = []; // Array of Home objects

  // Add a home to the array of homes
  add(home) {
    this._homes.push(home); // Add the home to the array
  }

  // Remove a home from the array of homes
  remove(home) {
    // Find the index of the home in the array
    let index = this._homes.indexOf(home);

    // If the home is in the array, remove it
    if (index > -1) {
      this._homes.splice(index, 1); // Remove the home from the array
    }
  }

  // Calculate the total cost of the loan
  total() {
    let total = 0; // Total cost of the loan

    // Calculate the total cost of the loan by adding the price of each home in the array
    for (let home of this._homes) {
      total += Number(home.price); // Add the price of the home to the total
    }

    return total;  // Return the total cost of the loan
  }
}