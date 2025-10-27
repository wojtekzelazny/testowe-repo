/// <reference types="cypress" />

import Base from "../pages/Base";
import Home from "../pages/Home";
import Women from "../pages/Women";

describe("Test związany z zaznaczaniem checkboxa", () => {
    it("Kliknięcie w zakładkę Women", () => {
        Base.openHomePage();
        Home.WomenTab.click();
        cy.url().should("include", "id_category=3&controller=category");
    })

    it("Zaznaczenie checkbox'a", () => {
        Women.topsCheckbox.check();
        Women.topsCheckbox.should("be.checked");
        Women.dressesCheckbox.check();
        Women.sizeCheckbox.check();

    })
})