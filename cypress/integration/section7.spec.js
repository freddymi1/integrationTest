/* eslint-disable no-undef */

// Verification de footer
describe("Verification du footer", ()=> {
    it("Verified", ()=> {
        cy.visit("/#section6")
        cy.get(".card__title").contains("ADDRESS")
        cy.get(".card__title").contains("FOLLOW US")
        cy.get(".card__title").contains("ABOUT US")
    })
    describe("Verification du adresse", ()=> {
        it("Verified", ()=> {
            cy.get(".sect5__contenu").contains("400-401 West Georgia Street")
            cy.get(".sect5__contenu").contains("Vancouver, BC, Canada, V6B 5A1")
            cy.get(".sect5__contenu").contains("+1 (123) 456 7890")
            cy.get(".sect5__contenu").contains("sales@insurance.com")
        })
    })
    describe("Verification du follow us", ()=> {
        it("Verified", ()=> {
            cy.get(".sect5__contenu").contains("Twitter")
            cy.get(".sect5__contenu").contains("Facebook")
            cy.get(".sect5__contenu").contains("LinkedIn")
            cy.get(".sect5__contenu").contains("Instagram")
        })
    })
    describe("Verification du about us", ()=> {
        it("Verified", ()=> {
            cy.get(".descr__card").contains("Compellingly myocardinate market-driven infrastructures before team driven manufactured products. Monotonectally exploit tactical markets vis-a-vis excellent deliverables. ")
            
        })
    })
    describe("Verification du copyright", ()=> {
        it("Verified", ()=> {
            cy.get(".copy").contains("Copyright © 2019. Insurance LLC")
        })
    })
})