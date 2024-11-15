class FirstC{
    // //verify the webpage
    // verifyLogin(){
    //     cy.get(".title").should('have.text','Demos')
    // }
    //clicking on serives button
    clickService(){
        cy.get('[href="#web"]').click()
        cy.get('#ContentPlaceholder1_C329_Col00').click()
        cy.get('#ContentPlaceholder1_C329_Col01').click()
        cy.get('#ContentPlaceholder1_C329_Col02').click()
        cy.get('#ContentPlaceholder1_C329_Col03').click()
        cy.get('#ContentPlaceholder1_C329_Col04').click()
    }
}
class SecondC{
    clickDesktop(){
        cy.get('[href="#desktop"]').click()
        cy.get('#ContentPlaceholder1_C337_Col00').click()
        cy.get('#ContentPlaceholder1_C337_Col01').click()
        cy.get('#ContentPlaceholder1_C337_Col02').click()
        cy.get('#ContentPlaceholder1_C337_Col03').click()
    }
}
class ThirdC {
    clickMobile(){
        cy.get('[href="#mobile"]').click()
        cy.get('#ContentPlaceholder1_C340_Col01 > div.u-mb1 > img').click()
        cy.get('#ContentPlaceholder1_C340_Col00').click()
        cy.get('#ContentPlaceholder1_C340_Col01 > .h4').click()
    }
}
class FourthC {
    clickRep(){
        cy.get('[href="#reporting"]').click()
        cy.get('#ContentPlaceholder1_C347_Col00').click()
        cy.get('#ContentPlaceholder1_C347_Col00 > .h4').click()
        cy.get('#ContentPlaceholder1_C347_Col01').click()
        cy.get('#ContentPlaceholder1_C347_Col01 > .h4').click()

    }
}
class FifthC {
    clickTest(){
        cy.get('[href="#testing"]').click()
        cy.get('#ContentPlaceholder1_C347_Col00').click()
        cy.get('#ContentPlaceholder1_C344_Col01').click()
        cy.get('#ContentPlaceholder1_C344_Col01 > p.u-mb1').click()
        cy.get('#ContentPlaceholder1_C344_Col02').click()
        cy.get('#ContentPlaceholder1_C344_Col02 > .h4').click()
        cy.get('#ContentPlaceholder1_C344_Col02 > p.u-mb1').click()
    }
}

  
//    // cy.get('button[name="#Dropdown-1"]').click();
//    cy.get('button[name="#Dropdown-1"]').select('Product questions');
//     cy.get('#ProductInterest').select('Training, Services and Consulting');
//     cy.get('input[name="firstName"]').type('Snehith');                // First Name
//     cy.get('input[name="lastName"]').type('Sunkari');                  // Last Name
//     cy.get('input[name="Business Email"]').type('example1@gmail.com');                // Business Email
//     cy.get('input[name="company"]').type('xyz'); 
//     cy.get('select[name="country"]').select('Aruba');
//     if (phone) {
//         cy.get('#Textbox-4').type('7286096202');
//       }
//     cy.get('#Textarea-1').type('nothing')
//     cy.get("button[aria-label='Contact Us']").click();
    

  


export default {FirstC,SecondC,ThirdC,FourthC,FifthC};
