/* eslint-disable no-undef */
// Verifier si les Logo et les titre navlink sur le nav sont present
describe("Nav", ()=>{
    it("Nav ok", ()=>{
        cy.visit("/")
        cy.get(".nav__logo").contains("FinCorp")
        cy.get(".nav__link").contains("For you & family")
        cy.get(".nav__link").contains("For Business")
    })
})