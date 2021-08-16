/* eslint-disable no-undef */

// Verification de section 6
describe("Verification des donnees dans la section 6", ()=> {
    it("Si ok", ()=> {
        cy.visit("/#section6")
        cy.get(".button__sec4").contains("Get your free Quote")
        cy.get(".sect__title").contains("Insurance made easy")
        cy.get(".sect-desc").contains("At fincorp, we are commited to provide top-notch services to our customers.")
    })

    describe("Verification du accordeon 1", () => {
        it("Ok", ()=> {
            cy.visit("/#section6")
            cy.get(".skills__title").contains("What are the documents required for claiming?")
            cy.get(".textComp").contains("A pre-authorization form is required in case of cashless claims which are to be submitted to the TPA. Other documents might also be required and you should have the knowledge of the required documents.")
        })
    })
    describe("Verification du accordeon 2", () => {
        it("Ok", ()=> {
            cy.visit("/#section6")
            cy.get(".skills__title").contains("Which are the network hospitals in your vicinity?")
            cy.get(".textComp").contains("A pre-authorization form is required in case of cashless claims which are to be submitted to the TPA. Other documents might also be required and you should have the knowledge of the required documents.")
        })
    })
    describe("Verification du accordeon 3", () => {
        it("Ok", ()=> {
            cy.visit("/#section6")
            cy.get(".skills__title").contains("Will I get covered for my pre-existing illnesses?")
            cy.get(".textComp").contains("A pre-authorization form is required in case of cashless claims which are to be submitted to the TPA. Other documents might also be required and you should have the knowledge of the required documents.")
        })
    })
    describe("Verification du accordeon 4", () => {
        it("Ok", ()=> {
            cy.visit("/#section6")
            cy.get(".skills__title").contains("Is maternity covered in health insurance policies?")
            cy.get(".textComp").contains("A pre-authorization form is required in case of cashless claims which are to be submitted to the TPA. Other documents might also be required and you should have the knowledge of the required documents.")
        })
    })
})