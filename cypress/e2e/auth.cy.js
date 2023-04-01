import AuthPage from "../pages/auth.page";
import ProductsPage from "../pages/products.page";

describe('Auth', () => {
  beforeEach('',()=>{
    AuthPage.open()
  })

  it('auth with valid data', () => {

    AuthPage.inputUserName.type(Cypress.env('username'))
    AuthPage.inputPassword.type(Cypress.env('password'))
    AuthPage.inputButtonLogin.click()

    ProductsPage.path.should('eq','/inventory.html')
    ProductsPage.linkCart.should('exist').should('be.visible')
  })
})
