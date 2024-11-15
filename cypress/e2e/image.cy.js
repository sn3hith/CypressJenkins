require("cypress-file-upload")
describe("Example to demonstrate file upload in cypress", function () {
    before(function(){
        cy.visit("https://the-internet.herokuapp.com/upload")
    })
    it('File upload using cypress-file-upload npm package', () => {
        cy.get('input[type="file"]').attachFile('images.jpg')
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('images.jpg')
    })
})
 