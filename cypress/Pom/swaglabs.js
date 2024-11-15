class LoginPage {
    visit() {
      cy.visit('https://www.saucedemo.com/');
    }
  
    enterUsername(username) {
      cy.get('#user-name').type(username);
    }
  
    enterPassword(password) {
      cy.get('#password').type(password);
    }
  
    clickLoginButton() {
      cy.get('#login-button').click();
    }

    }
    class InventoryPage {
        getProductList() {
          return cy.get('.inventory_item');
        }
      
        addToCart(productName) {
          cy.contains('.inventory_item', productName).find('button').click();
        }
      
        goToCart() {
          cy.get('.shopping_cart_link').click();
        }
      }
  
  
  export default LoginPage;