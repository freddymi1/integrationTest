/* eslint-disable no-undef */
// Verification de section 5
describe("Verification de section 5", ()=> {
    it("Ok", ()=>{
        cy.visit("/#section5")
        cy.get(".section__title").contains("Honest Pricing")
        cy.get(".section__subtitle").contains("Simple & honest pricing. No hidden fees.")
    })
    describe("Verification des card sur le section 5", ()=> {
        it("Is Ok", ()=> {
            cy.visit("/#section5")
            cy.get(".card__title-host").contains("BASIC")
            cy.get(".card__title-host1").contains("PROFESSIONAL")
            cy.get(".card__title-host2").contains("PREMIUM")
            // BASIC && PROFESSIONNAL && PREMIUM
            cy.get(".sect5__contenu").contains("Rapidiously strategize value")
            cy.get(".sect5__contenu").contains("Progressively visualize leadership")
            cy.get(".sect5__contenu").contains("Equity invested supply chains.")
            cy.get(".sect5__contenu").contains("Proactively leverage")
        })
    })

    describe("Verification button", ()=> {
        it("Validez", ()=>{
            cy.visit("/#section5")
            cy.get("button").contains("Choose Plan")
        })
    })

    describe("Verification text en bas", ()=> {
        it("Validez", ()=>{
            cy.visit("/#section5")
            cy.get(".text__footer5").contains("*Prices shown per month if paid annually")
        })
    })
})