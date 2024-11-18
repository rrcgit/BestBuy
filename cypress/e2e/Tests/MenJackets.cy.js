import loginPage from "../../support/PageObjects/loginpage.cy"
import HomePage from "../../support/PageObjects/HomePage.cy"

const signiinfo = new loginPage()
const productSelection = new HomePage()

describe('mens shopping scenarios',function()
{

    before(function()
    {
        cy.fixture('example.json').then((data)=>{
            this.data=data
        })
    })

    it.skip('Navigating to products page',function()
    {

        cy.visit(Cypress.env('lunaurl'))

        signiinfo.signin(this.data.email,this.data.password)
        productSelection.menJacketSelection()

    })
    it("Adding products to cart", function(){
        cy.visit(Cypress.env('lunaurl'))

        signiinfo.signin(this.data.email,this.data.password)
        productSelection.menJacketSelection()
        cy.wait(5000)
        productSelection.StyleSelectionJackets()
        productSelection.SelectingXSsize()
        productSelection.AddingtoCart()

    })


})