/*
============================================
; Title:  house-manager.js
; Author: Professor Krasso
; Date:   1 February 2023
; Description: Demonstrates how to create a JavaScript class an iterator for the 
               house array.  
;===========================================
*/

import { House } from './house.js';

export class HouseManager {
    constructor() {
        this.houses = [
            new House('Gryffindor', 'Lion'),
            new House('Hufflepuff', 'Badger'),
            new House('Ravenclaw', 'Eagle'),
            new House('Slytherin', 'Snake')
        ]
    }

    count() {
        return this.houses.length
    }

    *[Symbol.iterator]() {
        for (let house of this.houses) {
            yield house
        }
    }
}