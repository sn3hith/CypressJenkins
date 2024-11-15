describe("template spec", () => {
    it("Link testing", () => {
        cy.visit('https://filiphric.com/testing-links-with-cypress')
        cy.contains('blog').click()
        cy.go('back')
 
     
 
   
     
    });
  });
   
 
 