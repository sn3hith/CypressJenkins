require("cypress-xpath")
 
describe('template spec',() =>{
    it('X-Path Test',() =>{
        cy.visit('https://www.google.co.in/')
        cy.xpath("//a[normalize-space()='Images']").click()
    })
})