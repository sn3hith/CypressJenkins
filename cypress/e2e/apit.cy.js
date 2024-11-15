describe("HTTP Request",()=>{
   
    it("Get Call",()=>{
        cy.request('Get',  "https://jsonplaceholder.typicode.com/posts/1")
        .its('status')
        .should('equal',200)
       
 
    })

    it('POST Call',() =>
        cy.request( {
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body : {
                title : "post call",
                body : "call",
                userID : 1
            }
        }

        )
        .its('status')
        .should('equal',201)


    )
})