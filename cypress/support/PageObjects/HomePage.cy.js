module.exports=class HomePage
{

    menJacketSelection()
    {
        cy.get('.navigation ul li #ui-id-5').trigger('mouseover')
        cy.get('.navigation #ui-id-2 > li.level0.nav-3.category-item.level-top.parent.ui-menu-item > ul > li').contains('Top').trigger('mouseover')
        cy.get('.navigation #ui-id-2 > li.level0.nav-3.category-item.level-top.parent.ui-menu-item > ul > li >ul > li').contains('Jackets').click()

    }
    StyleSelectionJackets()
    {
        cy.get(':nth-child(1) > .filter-options-title').click()
        cy.get('.allow > .filter-options-content >.items >:nth-child(1) >a').click()

    }
    SelectingXSsize()
    {
        cy.get('.products-grid .product-item').find('.text').each(($el)=>
            {
                if($el.text().trim()=== 'XS')
                {
                    cy.wrap($el).click()
                }
    
            })
    }

    AddingtoCart()
    {
        cy.get('.product-item-link').each(($el, index)=>
            {
                if($el.text().trim()==='Proteus Fitness Jackshirt')
                {
                    cy.get('.product-item-info').eq(index).trigger('mouseover')
                    cy.contains('.action','Add to Cart').click({force:true})
                }
    
            })
    }
    
}