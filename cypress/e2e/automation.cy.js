require("cypress-xpath")
describe("backup", () => {
    it("Visiting the website", () => {
      cy.visit("https://qaautomationlabs.com/");
    })
    it('URL info testing', () => {
        cy.visit("https://qaautomationlabs.com/")                
        cy.url().should('eq','https://qaautomationlabs.com/')
        cy.wait(2000)    
    })
    it('Verify QA Automation Lab image', () => {
        cy.visit("https://qaautomationlabs.com/")                
        cy.get('.mobile-header-row > .logo-container > .logo > .logo-link > img').click()
        cy.wait(2000)    
    })
    it('Verify the Image with text power of upgrading your skills', () => {
        cy.visit("https://qaautomationlabs.com/")                
        cy.get('.active > .content-item > .elementor-section > .elementor-container > .elementor-row').should('be.visible')
        cy.wait(2000)    
    })
    it('Explore More Link test ', () => {
        cy.visit("https://qaautomationlabs.com/")                
        cy.get('.active > .content-item > .elementor-section > .elementor-container > .elementor-row > .slide-content-column > .technum-content-wrapper-1 > .technum-heading > .technum-heading-content').should('be.visible')
        cy.wait(2000)    
    })
    it('Explore More Link test', () => {
        cy.visit("https://qaautomationlabs.com/")                
        cy.get('.active > .content-item > .elementor-section > .elementor-container > .elementor-row > .slide-content-column > .technum-content-wrapper-3 > .content-slider-item-buttons > .technum-button').click()
        cy.wait(2000)    
    })
      it(' Click on Home page menu - verify the address', () => {
        cy.visit("https://qaautomationlabs.com/")                
        cy.get('.menu-trigger-icon').click()
        cy.get('#menu-item-6573 > a').click()
        cy.url().should("eq", "https://qaautomationlabs.com/");
        cy.wait(2000)    
    })
    it('Click on About page menu - verify the address', () => {
        cy.visit("https://qaautomationlabs.com/")                
        cy.get('.menu-trigger-icon').click()
        cy.get('#menu-item-6574 > a').click()
        cy.url().should("eq", "https://qaautomationlabs.com/about/");
        cy.wait(2000)    
    })
    it(' Click on Course  menu - verify the address ', () => {
        cy.visit("https://qaautomationlabs.com/")                
        cy.get('.menu-trigger-icon').click()
        cy.get('#menu-item-6577 > a').click()
        cy.url().should("eq", "https://qaautomationlabs.com/courses/");
        cy.wait(2000)    
    })
    it(' Click on evets  - verify the address', () => {
        cy.visit("https://qaautomationlabs.com/")                
      cy.get('.menu-trigger-icon').click()
      cy.get('#menu-item-6732 > a').click()
      cy.url().should("eq", "https://qaautomationlabs.com/events/");
        cy.wait(2000)    
    })
    it(' Click on Cypress Workshop Link  - verify the address', () => {
        cy.visit("https://qaautomationlabs.com/")                
      cy.get('.menu-trigger-icon').click()
      cy.get('#menu-item-6749 > a').click()
      cy.url().should("eq", "https://qaautomationlabs.com/cypress-workshop/");
        cy.wait(2000)    
    })
    it(' click on Cypress blog link  - verify the address', () => {
        cy.visit("https://qaautomationlabs.com/")                
      cy.get('.menu-trigger-icon').click()
      cy.get('#menu-item-6905 > a').click()
      cy.url().should("eq", "https://qaautomationlabs.com/blog/");
        cy.wait(2000)    
    })
    it(' click on Cypress contacts link  - verify the address', () => {
        cy.visit("https://qaautomationlabs.com/")                
      cy.get('.menu-trigger-icon').click()
      cy.get('#menu-item-6580 > a').click()
      cy.url().should("eq", "https://qaautomationlabs.com/contacts/");
        cy.wait(2000)    
    })
    it.only('Should display results for a valid search query', () => {
        // Type a valid search query into the search bar
        cy.visit("https://qaautomationlabs.com/")
        cy.xpath("(//div[@class='header-icons-container'])[2]").click()
        cy.get('body > div:nth-child(3) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(8) > form:nth-child(1) > label:nth-child(1) > input:nth-child(2)').type('automation{Enter}'); // Update the selector if needed
    })
    it('  QA Automation Labs - read more link testing  ', () => {
        cy.visit("https://qaautomationlabs.com/")
        cy.get('.menu-trigger-icon').click()
        cy.get('#menu-item-6573 > a').click()           
        cy.get('.elementor-element-8b1b94d > .elementor-widget-container > .button-widget > .button-container > .technum-button').click()
        cy.url().should("eq", "https://qaautomationlabs.com/");
        cy.wait(2000)    
    })
    it('   Verify H2 Heading "courses" ', () => {
        cy.visit("https://qaautomationlabs.com/")
        cy.get('.menu-trigger-icon').click()
        cy.get('#menu-item-6577 > a').click()
        cy.url().should("eq", "https://qaautomationlabs.com/courses/");
        cy.wait(2000)    
    })
    it('  Advanced cypress test course link  test ', () => {
        cy.visit("https://qaautomationlabs.com/")
        cy.get('.menu-trigger-icon').click()
        cy.get('#menu-item-6577 > a').click()
        cy.get('.post-505 > .blog-item > .post-labels > .post-categories > .post-category-item').click()
        cy.url().should("eq", "https://qaautomationlabs.com/courses/");
        cy.wait(2000)    
    })
    it('  Advanced cypress test course read more elink test ', () => {
        cy.visit("https://qaautomationlabs.com/")
        cy.get('.menu-trigger-icon').click()
        cy.get('#menu-item-6577 > a').click()
        cy.get('.post-505 > .blog-item > .post-more-button > a > span').click()
        cy.url().should("eq", "https://qaautomationlabs.com/courses/");
        cy.wait(2000)    
    })
    it('  Starting with Cypress: A Beginner’s Path to Test Automation link test  ', () => {
        cy.visit("https://qaautomationlabs.com/")
        cy.get('.menu-trigger-icon').click()
        cy.get('#menu-item-6577 > a').click()
        cy.get('.post-502 > .blog-item > .post-labels > .post-categories > .post-category-item').click()
        cy.url().should("eq", "https://qaautomationlabs.com/courses/");
        cy.wait(2000)    
    })
    it('  Starting with Cypress: A Beginner’s Path to Test Automation - read more test  ', () => {
        cy.visit("https://qaautomationlabs.com/")
        cy.get('.menu-trigger-icon').click()
        cy.get('#menu-item-6577 > a').click()
        cy.get('.post-502 > .blog-item > .post-more-button > a > span').click()
        cy.url().should("eq", "https://qaautomationlabs.com/courses/");
        cy.wait(2000)    
    })
    it(' Coure-3 link test   ', () => {
        cy.visit("https://qaautomationlabs.com/")
        cy.get('.menu-trigger-icon').click()
        cy.get('#menu-item-6577 > a').click()
        cy.get('.post-504 > .blog-item > .post-labels > .post-categories > .post-category-item').click()
        cy.url().should("eq", "https://qaautomationlabs.com/courses/");
        cy.wait(2000)    
    })




    








    
})