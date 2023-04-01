import Page from "./page";

class ProductsPage extends Page{

    get linkCart(){return cy.get('#shopping_cart_container')}
}

export  default new ProductsPage()
