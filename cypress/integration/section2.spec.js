describe("Verification de section2", ()=> {
    it("Ok", ()=>{
        cy.visit("/#section2")
        cy.get(".section__title").contains("Simplified Claims")
        cy.get(".section__subtitle").contains("Easy as One, Two, Three")
    })
    describe("Verification des titres des card sur la section 2", ()=>{
        it("renders correctly", ()=>{
            cy.visit("/#section2")
            cy.get(".card__title").contains("Report Claim")
            cy.get(".card__title").contains("Claim Processing")
            cy.get(".card__title").contains("Final Settlement")
            cy.get(".descr__card").contains("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc vitae velit rutrum suscipit non et eros.")
        })
    })
})