/*
============================================
; Title:  filter-ex5.js
; Author: Professor Krasso
; Date:   26 January 2023
; Description: Filter example
;===========================================
*/

// Array of houses.
const houses = ['gryffindor', 'hufflepuff', 'ravenclaw', 'slytherin']

/**
 * @description Find function with one argument for query. Filters the houses array based on the query argument. 
 * @param {string} query 
 * @returns array of houses
 */
function find (query) {
    return houses.filter(house => house.includes(query))
}

// Call the find() function with a query value of 'e'
const result = find('e')

// Display the results in the terminal window.
console.log(result)