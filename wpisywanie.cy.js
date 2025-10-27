/// <reference types="cypress" />

import Search from "../pages/Search";
import Home from "../pages/Home";
import Base from "../pages/Base";
import ResultPage from "../pages/ResultPage";
import {searchPhrase, notFoundProduct} from "../fixtures/searchData.json";

describe("Wpisywanie teskstu w wyszukiwarke", () => {
    it("Wpisywanie tekstu", () => {
        Base.openHomePage();
        Search.typeSearchPhrase(searchPhrase);
        Search.searchBox.should("have.value", searchPhrase)
        cy.wait(3000)
        Search.clearSearchPhrase();
        cy.wait(3000)
        Search.typeSearchPhrase(`${searchPhrase} {enter}`);
        ResultPage.searchAlert.should("be.visible").and("include.text", "No results");
        Search.searchBox.should("have.class", "search_query");
        Search.searchBox.should("have.css", "margin-right", "1px");

    })
})