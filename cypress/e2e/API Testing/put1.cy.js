const datajson = require('../../fixtures/createuser.json')
describe('HTTP Request', () => {
    let randomText = ""
    let testEmail = ""
    
    it('PUT Call ', () => {
        var pattern = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz"
        for(var i=0;i<10;i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + '@gmail.com'

      cy.request({
        method : 'PUT',
        url    : 'https://gorest.co.in/public/v2/users/7523681',
        headers : {
        'authorization' : "Bearer 6cecd622584c82ed285b2754f69cb6025c32d36dd79765480d8c5598cb9ced97"
        },
        body : {
                            
                "name": datajson.name,
                "email": testEmail,
                "gender": datajson.gender,
                "status": datajson.status
              }
      }).then((res) =>  
      {
        cy.log(JSON.stringify(res))
         expect(res.status).to.eq(200)
         expect(res.body).has.property('email',testEmail)
         expect(res.body).has.property('status','active')
      })          
    })

})