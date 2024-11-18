describe('http mock testing scenarios',function(){

    before(function(){

        cy.fixture('example.json').then((data)=>{

        this.data=data

        })
    })
    it('first test token',function(){

        cy.visit(Cypress.env('rahushettyAngular'))

        cy.intercept('GET',"https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",(req)=>
        {

            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=rrc"

            req.continue((res)=>{

                expect(res.statusCode).to.equal(404)
            })
        }).as('invalidUser')
        cy.get('.btn.btn-primary').click()
        cy.wait('@invalidUser')


    })

})

