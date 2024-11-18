module.exports = class loginPage
{

PersonalInfo(firstname, lastname)
{

    cy.get('#firstname').type(firstname)
    cy.get('#lastname').type(lastname)
}
signinInfo(email,password)
{
    cy.get('#email_address').type(email)
    cy.get('#password').type(password)
    cy.get('#password-confirmation').type(password)

}
accountCreation()
{
    cy.get('.action.submit.primary').click()
    
}
signin(email,password)
{
    cy.get('.authorization-link ').contains('Sign In').click()
    cy.get('#email').type(email)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password)
    cy.get('.primary.action.login').click()
}

}