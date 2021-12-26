
class LoginPage {

    navigateToLoginPage() {
        cy.visit('/')
    }

    getUsernameInput() {
        return cy.get('input[name="username"]');
    }

    getPasswordInput() {
        return cy.get('input[name="password"]');
    }

    LoginButton() {
        return cy.get('input[value="Login"]');
    }

    verifyUsernameInputIsVisible() {
        this.getUsernameInput().should("be.visible");
    }

    verifyPasswordInputIsVisible() {
        this.getPasswordInput().should("be.visible");
    }

    verifyLoginButtonIsVisible() {
        this.LoginButton().should("be.visible");
    }

    verifyLableIsVisible() {
        cy.get('html[lang="en"]').should("be.visible");
    }

    verifyHeadingIsVisible() {
        cy.contains('QA Portal Login').should("be.visible");
    }

    setUsername(username) {
        this.getUsernameInput().clear().type(username);
    }

    setPassword(password) {
        this.getPasswordInput().clear().type(password);
    }

    clickLoginButton() {
        this.LoginButton().click()
    }

    verifyEmptyUsernameErrorAppeared() {
        cy.contains('Please enter username.').should("be.visible");
    }

    verifyEmptyPasswordErrorAppeared() {
        cy.contains('Please enter your password.').should("be.visible");
    }

    verifyLoginUnsuccessful() {
        cy.contains('The password you entered was not valid.')
            .should("be.visible");
    }

    verifyLoggedInSuccessfully() {
        cy.url().should('not.include', 'registerlogin/registerlogin.php')
    }
}
export const onLoginPage = new LoginPage();
