/// <reference types="cypress" />

describe ("Kliknięcie w element na stronie", () => {
    it("Kliknięcie w zakładkę Contact Us", () => {
        cy.visit ("/");
        cy.get("a[title='Contact us']").click();
    })
})