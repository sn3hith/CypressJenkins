describe("Right Click",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it("Right Click",()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get(".context-menu-one.btn.btn-neutral").rightclick();
        //cy.get(".context-menu-icon-copy > span").should('be.visible');
        cy.get('.context-menu-icon-copy').click();
       
 
    })
})