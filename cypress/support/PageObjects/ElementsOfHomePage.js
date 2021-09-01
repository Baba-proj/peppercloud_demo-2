class ElementsOfHomePage {

    getTitle() {
        cy.get('.title');
    }
    getUserID() {
        cy.get("#email");
    }
    getPassword() {
        cy.get("#password");
    }
    getLoginButton() {
        cy.get(".slds-button_brand");
    }
    getPhoneFiled() {
        cy.get('#F21');
    }

} export default ElementsOfHomePage;