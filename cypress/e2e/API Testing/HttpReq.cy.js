describe('HTTP Request',()=>{
    let accessToken= "6cecd622584c82ed285b2754f69cb6025c32d36dd79765480d8c5598cb9ced97"
    it('Get Call',()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                'authorization':"Bearer"+accessToken
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
        })
    })
 
    it('Get Request for ID',()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users/7522240',
            headers:{
                'authorization':"Bearer"+accessToken
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
        })
    })
})