require('cypress-xpath')
describe("qaautomationlabs", () => {
    describe('qaautomationlabs',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
              return false
           
            })
           
            // it('Image', () => {
            //     cy.visit("https://qaautomationlabs.com/")                
            //     cy.xpath(" //div[@class='mobile-header-row']//img[@alt='QA Automation Labs']").click()
            //     cy.wait(2000)        
            // })
 
            // Explore
            it('Explore', () => {
                cy.visit("https://qaautomationlabs.com/")                
                cy.xpath("//div[@class='owl-item active']//a[@class='technum-button'][normalize-space()='Explore More']").click()
                cy.wait(2000)        
            })
 
            // Explore
            it('Explore More', () => {
                cy.visit("https://qaautomationlabs.com/")                
                cy.xpath("//a[@href='https://qaautomationlabs.com/about/'][normalize-space()='Explore More']").click()
                cy.wait(2000)        
            })
 
           
            it('Read It 1', () => {
                cy.visit("https://qaautomationlabs.com/")                
                cy.xpath("//div[@class='grid-item grid-blog-item-wrapper case-study-item-wrapper isotope-item post-502 technum_case_study type-technum_case_study status-publish hentry technum_case_study_category-course technum_case_study_tag-course-1']//span[contains(text(),'Read More')]").click()
                cy.wait(2000)        
            })
 
            it('Read It 2', () => {
                cy.visit("https://qaautomationlabs.com/")                
                cy.xpath("//div[@class='grid-item grid-blog-item-wrapper case-study-item-wrapper isotope-item post-505 technum_case_study type-technum_case_study status-publish hentry technum_case_study_category-course technum_case_study_tag-cypress']//span[contains(text(),'Read More')]").click()
                cy.wait(2000)        
            })
           
           
            it('Read It 3', () => {
                cy.visit("https://qaautomationlabs.com/")                
                cy.xpath("//div[@class='grid-item grid-blog-item-wrapper case-study-item-wrapper isotope-item post-504 technum_case_study type-technum_case_study status-publish has-post-thumbnail hentry technum_case_study_category-course technum_case_study_tag-course-3']//span[contains(text(),'Read More')]").click()
                cy.wait(2000)        
            })
 
            it('event Read It 1', () => {
                cy.visit("https://qaautomationlabs.com/")                
                cy.xpath("//div[@class='grid-item grid-blog-item-wrapper case-study-item-wrapper isotope-item post-8301 technum_case_study type-technum_case_study status-publish hentry technum_case_study_category-events technum_case_study_tag-automation technum_case_study_tag-conference technum_case_study_tag-qa technum_case_study_tag-test-automation technum_case_study_tag-testing']//span[contains(text(),'Read More')]").click()
                cy.wait(2000)        
            })
 
            it('event Read It 2', () => {
                cy.visit("https://qaautomationlabs.com/")                
                cy.xpath("//div[@class='grid-item grid-blog-item-wrapper case-study-item-wrapper isotope-item post-496 technum_case_study type-technum_case_study status-publish has-post-thumbnail hentry technum_case_study_category-events technum_case_study_tag-event-1']//span[contains(text(),'Read More')]").click()
                cy.wait(2000)        
            })
 
            it('Blog Explore', () => {
                cy.visit("https://qaautomationlabs.com/")                
                cy.xpath("//div[@class='elementor-element elementor-element-e2b70ba elementor-widget elementor-widget-technum_button']//a[@class='technum-button'][normalize-space()='Explore More']").click()
                cy.wait(2000)        
            })
           
           
           
 
            it('About', () => {
                cy.visit("https://qaautomationlabs.com/")                
                cy.xpath("//div[@class='sticky-wrapper']//div[@class='mobile-header-row']//div[@class='header-icons-container']").click()
                cy.xpath("//li[@id='menu-item-6574']//a[normalize-space()='About']").click()
                cy.wait(2000)        
            })
 
            it('Courses', () => {
                cy.visit("https://qaautomationlabs.com/")                
                cy.xpath("//div[@class='sticky-wrapper']//div[@class='mobile-header-row']//div[@class='header-icons-container']").click()
                cy.xpath("//li[@id='menu-item-6577']//a[normalize-space()='Courses']").click()
                cy.wait(2000)        
            })
           
            it('Events', () => {
                cy.visit("https://qaautomationlabs.com/")                
                cy.xpath("//div[@class='sticky-wrapper']//div[@class='mobile-header-row']//div[@class='header-icons-container']").click()
                cy.xpath("//li[@id='menu-item-6732']//a[normalize-space()='Events']").click()
                cy.wait(2000)        
            })
 
            it('Cypress Workshop', () => {
                cy.visit("https://qaautomationlabs.com/")                
                cy.xpath("//div[@class='sticky-wrapper']//div[@class='mobile-header-row']//div[@class='header-icons-container']").click()
                cy.xpath("//li[@id='menu-item-6749']//a[normalize-space()='Cypress Workshop']").click()
                cy.wait(2000)        
            })
 
            it('Blog', () => {
                cy.visit("https://qaautomationlabs.com/")                
                cy.xpath("//div[@class='sticky-wrapper']//div[@class='mobile-header-row']//div[@class='header-icons-container']").click()
                cy.xpath("//li[@id='menu-item-6905']//a[normalize-space()='Blog']").click()
                cy.wait(2000)        
            })
 
            it('Contacts', () => {
                cy.visit("https://qaautomationlabs.com/")                
                cy.xpath("//div[@class='sticky-wrapper']//div[@class='mobile-header-row']//div[@class='header-icons-container']").click()
                cy.xpath("//li[@id='menu-item-6580']//a[normalize-space()='Contacts']").click()
                cy.wait(2000)        
            })
 
           
})
})
