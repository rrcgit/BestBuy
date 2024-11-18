import loginPage from "../../support/PageObjects/loginpage.cy"

describe('login page scenarios',function(){

    before(function()
    {

        cy.fixture('example.json').then((data)=>{

            this.data=data
        })
    })
    it('accountcreation test',function()
    {
       const accountDetails = new loginPage()


    cy.visit(Cypress.env('lunaurl'))
    cy.get('.header.links li').contains('Create an Account').click()
    accountDetails.PersonalInfo(this.data.firstname,this.data.lastname)
    accountDetails.signinInfo(this.data.email,this.data.password)
    accountDetails.accountCreation()

    cy.get(':nth-child(2) > .greet > .logged-in').should('have.text','Welcome,'+" "+this.data.firstname+" "+this.data.lastname+"!")

    })


})