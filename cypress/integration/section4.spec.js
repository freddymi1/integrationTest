/* eslint-disable no-undef */
// Verification de section 4
describe("Verification de section 4", ()=> {
    it("Ok", ()=>{
        cy.visit("/#section4")
        cy.get(".sect__title").contains("100% Satisfaction Guarantee")
        cy.get(".sect-desc").contains("We offer no questions asked refund policy for 14 days from the policy date.")
        cy.get(".button__sec4").contains("et your free Quote")
    })
})