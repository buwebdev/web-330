/*
============================================
; Title:  filter-ex3.js
; Author: Professor Krasso
; Date:   26 January 2023
; Description: Filter example
;===========================================
*/

// Array of colors.
const colors = ['red', 'blue', 'yellow', 'red', 'green', 'red']

/**
 * 
 * @param {string} color 
 * @returns true or false 
 * @description Returns true if the argument color is red.
 */
function findColors (color) {
    return color === 'red'
}

// Call JavaScript's built-in filter() function with the findColors function 
// as an argument.
const result = colors.filter(findColors)

// Display the result to the terminal window. 
console.log(result)