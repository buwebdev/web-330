/*
============================================
; Title:  filter-ex4.js
; Author: Professor Krasso
; Date:   26 January 2023
; Description: Filter example
;===========================================
*/

// Array of houses. 
const houses = ['gryffindor', 'hufflepuff', 'ravenclaw', 'slytherin']

// Returns a new array of houses where 'ff' is in the name. 
const filteredHouses = houses.filter(house => house.includes('ff'))

// Display the results to the terminal window. 
console.log(filteredHouses)