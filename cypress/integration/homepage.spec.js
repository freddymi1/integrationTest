/* eslint-disable no-undef */
// Verifier si les donnee sur le Homepage sont tous la
describe("home__data", ()=>{
    it("renders correctly", ()=>{
        cy.visit("/")
        cy.get(".home__subtitle").contains("Hello, We are Fincorp")
        cy.get(".home__title").contains("Insurance")
        cy.get(".home__title").contains("made easy.")
    })
})

// Verifier si le button dans la section home contien le mot Get your free Quote

describe("Button test", ()=>{
    it("ok", ()=>{
        cy.visit("/")
        cy.get("button").contains("Get your free Quote")
    })
})

// Verifier les titre sur la section bas de home page
describe("home content", ()=>{
    it("renders correctly", ()=>{
        cy.visit("/")
        cy.get(".home__title-contenu").contains("A new take on insurance")
        cy.get(".home__subtitle-contenu").contains("Great for individuals and business")
    })

    describe("List at home", ()=>{
        it("renders correctly", ()=>{
            cy.visit("/")
            cy.get(".home__section-title").contains("Monotonectally deploy seamless data and resource maximizing systems. ")
            cy.get(".subtitle__home").contains("Great for individuals and small families up to 4 members.")
            cy.get(".home__text").contains("A strong, up-to-date, employee benefits health insurance program is vital for attracting and retaining good employees. It takes diligence, creativity and attention to detail to ensure you are getting the best “bang for your buck” each and every year.")
        })
    })
    describe("Verificaition List at home", ()=>{
        it("renders correctly", ()=>{
            cy.visit("/")
            cy.get(".title__item").contains("Comprehensive Insurance")
            cy.get(".text-description").contains("Dynamically repurpose e-business users rather than granular products.")
            cy.get(".title__item").contains("Support is just a call away")
            cy.get(".text-description").contains("Rapidiously customize value-added platforms compliant action items.")
            cy.get(".title__item").contains("Say goodbye to paperwork.")
            cy.get(".text-description").contains("Globally deliver economically sound communities relationships.")
        })
    })
})