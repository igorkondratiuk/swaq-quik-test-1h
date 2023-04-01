
describe('Auth', () => {
  beforeEach('',()=>{
    cy.visit('')
  })

  it('auth with valid data', () => {

    cy.get('[data-test="username"]').type(Cypress.env('username'))
    cy.get('[data-test="password"]').type(Cypress.env('password'))
    cy.get('[data-test="login-button"]').click()

    cy.location('pathname').should('eq','/inventory.html')
    cy.get('#shopping_cart_container').should('exist').should('be.visible')
  })
})
