import HomePage from "../../support/PageObjects/HomePage.cy"
import loginPage from "../../support/PageObjects/loginpage.cy"

const signiinfo = new loginPage()
const productSelection = new HomePage()


describe('Bags Section Scenarios',function()
{

    before(function(){

        cy.fixture('example.json').then((data)=>{

            this.data = data
        })
    })

    it('Bags resulution test',function(){

        cy.visit(Cypress.env('lunaurl'))

        signiinfo.signin(this.data.email, this.data.password)

        cy.get('.section-item-content .level0.nav-4').trigger('mouseover')
        cy.get('.section-item-content .level0.nav-4 > ul').contains('Bags').click({force:true})
        cy.get('.modes >a').contains('List').click({force:true})
        cy.wait(5000)

        // cy.get('.product-items .details .price-box .price-wrapper').then(($els)=>{

        //     let hPrice = 0;
        //     let hIndex = -1;

        //     $els.each((index,el)=>{

        //         const pricetext = el.textContent.trim()
        //         const price = parseInt(pricetext.replace('$',''),10)
        //         console.log(price)

        //         if(price > hPrice)
        //         {
        //             hPrice = price
        //             hIndex = index

        //             console.log(hPrice)
        //             console.log(hIndex)
        //         }

        //     })
        //     if(hIndex!== -1)
        //         {
        //             cy.get('.product-items .details .actions-primary .action').eq(hIndex).click({force:true})
        //             // cy.wrap($els.eq(hIndex)).click()
        //         }

 
        // })
        cy.get('.product-items .details .price-box .price-wrapper').then(($els) => {
            let hPrice = 0;
            let hIndex = -1;
        
            $els.each((index, el) => {
                const priceText = el.textContent.trim();
                const price = parseInt(priceText.replace('$', ''), 10);
                console.log(price);
        
                if (price > hPrice) {
                    hPrice = price;
                    hIndex = index;
        
                    console.log(hPrice);
                    console.log(hIndex);
                }
            });
        
            if (hIndex !== -1) {
                // Re-query the parent container to ensure elements are up-to-date
                cy.get('.product-items .details .actions-primary .action').eq(hIndex -1).click({ force: true });
            }
        });
        

    })

})