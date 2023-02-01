/*
============================================
; Title:  fruit-manager.js
; Author: Professor Krasso
; Date:   1 February 2023
; Description: Demonstrates how to create a JavaScript class with operational methods
;===========================================
*/

export class FruitManager {
    constructor() {
        this.fruits = []
    }

    add (fruit) {
        this.fruits.push(fruit)
    }

    count () {
        return this.fruits.length
    }
}