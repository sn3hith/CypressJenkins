require('@4tw/cypress-drag-drop')
describe('template spec',()=>{
    it('drag and drop',()=>{
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get('#box6').drag('#box106',{force:true})
    })
})