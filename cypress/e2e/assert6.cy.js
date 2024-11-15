describe('Checkbox Tests on DemoQA', () => {
    beforeEach(() => {
      cy.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
      });
      cy.visit('https://demoqa.com/checkbox');
    });
  
    it('Clicks on Home checkbox', () => {
      cy.get('.rct-checkbox').first().click();
    });
  
    it('Clicks on Desktop checkbox', () => {
      cy.get('.rct-node-parent').first().find('.rct-collapse').click();
      cy.contains('Desktop').parent().find('.rct-checkbox').click();
    });
  
    it('Clicks on Documents checkbox', () => {
      cy.get('.rct-node-parent').first().find('.rct-collapse').click();
      cy.contains('Documents').parent().find('.rct-checkbox').click();
    });
  
    it('Clicks on Downloads checkbox', () => {
      cy.get('.rct-node-parent').first().find('.rct-collapse').click();
      cy.contains('Downloads').parent().find('.rct-checkbox').click();
    });
  });
  