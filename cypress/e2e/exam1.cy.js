import {FirstC,SecondC,ThirdC,FourthC,FifthC} from "./../Pom/exam1"
describe('template spec',()=>{
    it('Mid term Exam Q',()=>{
        cy.visit('https://www.telerik.com/support/demos')
 
        const ln = new FirstC()
        ln.clickService()
        const pr = new SecondC()
        pr.clickDesktop()       
        const ch = new ThirdC ()
        ch.clickMobile()
        const tr = new FourthC()
        tr.clickRep()
        const tt = new FifthC()
        tt.clickTest()
    })
})