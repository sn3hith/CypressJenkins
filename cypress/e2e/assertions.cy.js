describe("backup", () => {
    it("checking assertions", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //   cy.url().should('include','orangehrmlive.com')
    //   cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //   cy.url().should('contain','orangehrm')
    //   cy.url().should('include','orangehrmlive.com')
    //           .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //           .should('contain','orangehrm')
        // cy.url().should('include','orangehrmlive.com')
        //       .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //       .and('contain','orangehrm')
        //       .and('not.contain','orangehrm1')
        //       .and('not.include','orangehrmlive1.com')
        //       .and('not.eq','https://opensource-demo1.orangehrmlive.com/web/index.php/auth/login')
        //checking title
        // cy.title().should('include','Orange')
        //            .and('eq','OrangeHRM')
        //            .and('contain','HRM')      
        // cy.get('.orangehrm-login-branding > img').should('be.visible')
        //   .and('exist') 
        
          
        //username add
        cy.get("input[placeholder='Username']").type('Admin1');
        cy.get("input[placeholder='Username']").should('have.value','Admin1');
        cy.get("input[placeholder='Username']").clear()
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Username']").should('have.value','Admin');


                  
    })
})