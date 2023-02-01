/*
============================================
; Title:  header-component.js
; Author: Professor Krasso
; Date:   1 February 2023
; Description: Demonstrates how to create an HTML web component
;===========================================
*/

class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <h1>Assignment 5: Example</h1>
            <h2>Hogwarts Houses</h2>
        `
    }
}

customElements.define('header-component', HeaderComponent)