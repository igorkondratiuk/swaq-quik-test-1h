import Page from "./page";
class AuthPage extends Page {

    get inputUserName(){return cy.get('[data-test="username"]')}
    get inputPassword(){return cy.get('[data-test="password"]')}
    get inputButtonLogin(){return cy.get('[data-test="login-button"]')}

    open() {
        return super.open('');
    }
}
export default new AuthPage()

