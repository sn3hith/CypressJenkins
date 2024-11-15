describe('template spec',()=>{
    it('Data Driven Testing',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 
        cy.fixture('orangehrm').then( (data)=>{
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()
            cy.get('.oxd-main-menu-item').should('have.text',data.expected)
        })
    })
})