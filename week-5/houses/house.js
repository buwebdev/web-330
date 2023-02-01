/*
============================================
; Title:  house.js
; Author: Professor Krasso
; Date:   1 February 2023
; Description: House model
;===========================================
*/

export class House {
    constructor(name, mascot) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.mascot = mascot;
    }
}