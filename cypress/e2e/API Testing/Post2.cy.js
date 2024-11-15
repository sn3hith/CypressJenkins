describe('HTTP Request', () => {
    let randomText = ""
    let testEmail = ""
    
    it('POST Call ', () => {
        var pattern = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz"
        for(var i=0;i<10;i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + '@gmail.com'

      cy.request({
        method : 'POST',
        url    : 'https://gorest.co.in/public/v2/users',
        headers : {
        'authorization' : "Bearer 6cecd622584c82ed285b2754f69cb6025c32d36dd79765480d8c5598cb9ced97"
        },
        body : {
                            
                "name": "edu camp",
                "email": testEmail,
                "gender": "male",
                "status": "active"
              }
      }).then((res) =>  
      {
        cy.log(JSON.stringify(res))
         expect(res.status).to.eq(201)
         expect(res.body).has.property('email',testEmail)
         expect(res.body).has.property('status','active')
      })          
    })

})