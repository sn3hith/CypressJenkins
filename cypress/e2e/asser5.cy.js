describe("dropdown", () => {
    it('dropdown', () => {
        cy.visit("https://register.rediff.com/register/register.php")
        cy.get('select[id="country"]').select('49').should('have.value','49')
    })
})