describe('POST Request',()=>{
    //let accessToken= "6cecd622584c82ed285b2754f69cb6025c32d36dd79765480d8c5598cb9ced97"
    it('PSOT Call',()=>{
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                'authorization':"Bearer 6cecd622584c82ed285b2754f69cb6025c32d36dd79765480d8c5598cb9ced97"
            },
            body: {
                "name":"sne",
                "email":"sne@ab.com",
                "gender":"male",
                "status":"active"
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body).has.property('email','sne@ab.com')
            expect(res.body).has.property('status','active')
        })
    })
})