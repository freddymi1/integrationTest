// Verification des donnee sur la section 1
describe("Verification de section 1", ()=>{
    it("renders correctly", ()=>{
        cy.visit("/#section1")
        cy.get(".section__title").contains("Choose your Insurance")
        cy.get(".section__subtitle").contains("Keep Your Life Smile, Safe, and Wealthy")
    })
    describe("Verification des titres des card sur la section 1", ()=>{
        it("renders correctly", ()=>{
            cy.visit("/#section1")
            cy.get(".card__title").contains("Home Insurance")
            cy.get(".card__title").contains("Car Insurance")
            cy.get(".card__title").contains("Life Insurance")
            cy.get(".card__title").contains("Business Insurance")
            cy.get(".card__title").contains("Travel Insurance")
            cy.get(".card__title").contains("Other Insurance")
            cy.get(".descr__card").contains("Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.")
        })
    })
})