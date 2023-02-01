/*
============================================
; Title:  basket-component.js
; Author: Professor Krasso
; Date:   1 February 2023
; Description: Demonstrates how to create an HTML web component
;===========================================
*/

class BasketComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <i id="basketIcon" class="fa fa-shopping-basket"></i> (<span id="basket-count"></span>)
        `
    }
}

customElements.define('basket-component', BasketComponent)