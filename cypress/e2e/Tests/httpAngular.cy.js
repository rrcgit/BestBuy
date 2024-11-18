describe('http mock testing scenarios',function(){

    before(function(){

        cy.fixture('example.json').then((data)=>{

        this.data=data

        })
    })
    it('first test token',function(){

        cy.visit(Cypress.env('rahushettyAngular'))

        cy.intercept(
            //request
            {
                method: 'GET',
                url :"https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
            }, 
            //response
            {
                statusCode:200,
                body: 
                [
                    {
                        "book_name": "RestAssured with Java",
                        "isbn": "BSG",
                        "aisle": "001"
                    }
                ]
            }).as('bookdata')
            cy.get('.btn.btn-primary').click()
            cy.wait('@bookdata').then(({response,request})=>
            {
                cy.get('tr').should('have.length',response.body.length+1)

            })
    })

})

