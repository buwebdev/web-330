/*
============================================
; Title:  filter-ex2.js
; Author: Professor Krasso
; Date:   26 January 2023
; Description: Filter example 
;===========================================
*/

// Array of colors.
const colors = ['red', 'blue', 'yellow', 'red', 'green', 'red']

// Return a new array of colors matching red. 
const redColors = colors.filter(color => color === 'red');

// Display the results.
console.log(redColors); 