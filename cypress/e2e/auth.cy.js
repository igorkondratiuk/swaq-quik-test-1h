describe('Auth', () => {
  it('auth with valid data', () => {
    cy.visit('https://saucedemo.com')
    cy.get('[data-test="username"]')
    cy.get('[data-test="password"]')
    cy.get('[data-test="login-button"]').click()
  })
})
