describe('POST Request',()=>{
    // //let accessToken= "6cecd622584c82ed285b2754f69cb6025c32d36dd79765480d8c5598cb9ced97"
    it('POST Call',()=>{
    //     cy.request({
    //         method:'POST',
    //         url:'https://gorest.co.in/public/v2/users/7523711',
    //         headers:{
    //             'authorization':"Bearer 6cecd622584c82ed285b2754f69cb6025c32d36dd79765480d8c5598cb9ced97"
    //         },
    //         body: {
    //             "name":"rahul",
    //             "email":"rahul@ab.com",
    //             "gender":"male",
    //             "status":"active"
    //         }
    //     }).then((res)=>{
    //         cy.log(JSON.stringify(res))
    //         expect(res.status).to.eq(201)
    //         expect(res.body).has.property('email','rahul@ab.com')
    //         expect(res.body).has.property('status','active')
    //     }).then((res) =>
    //     {
    //         const userID = res.body.userID
    //         cy.log("user id is:" +7523711)
            cy.request({
                method: 'DELETE',
                url : 'https://gorest.co.in/public/v2/users/7523711',
                headers:{
                    'authorization':"Bearer 6cecd622584c82ed285b2754f69cb6025c32d36dd79765480d8c5598cb9ced97"
                },
            }).then((res) => {
                expect(res.status).to.eq(204)
            })

        })
    })
    