/* eslint-disable no-undef */
// Verification de section 3
describe("Verification de section 3", ()=> {
    it("Ok", ()=>{
        cy.visit("/#section3")
        cy.get(".quote__text").contains("I need to understand what’s going on – it’s my health and I want to feel secure in it. With my previous health insurance, I didn’t know how any of it worked.")
        cy.get(".titleSec3").contains("Matthew Young")
        cy.get(".textSec3").contains("Legal Consultant, United States")
    })
})