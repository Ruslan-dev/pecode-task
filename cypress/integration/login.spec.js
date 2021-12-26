import {onLoginPage} from "../support/page-objects/login/loginPage";


const userName = Cypress.env('username')
const password = Cypress.env('password')


describe("Verify login page", () => {

    it("Verify the visibility of login page elements", () => {
        onLoginPage.navigateToLoginPage()
        onLoginPage.verifyLableIsVisible();
        onLoginPage.verifyHeadingIsVisible();
        onLoginPage.verifyUsernameInputIsVisible();
        onLoginPage.verifyPasswordInputIsVisible();
        onLoginPage.verifyLoginButtonIsVisible();
    })

    it("Verify incorrect login error messages", () => {
        onLoginPage.clickLoginButton();
        onLoginPage.verifyEmptyUsernameErrorAppeared();
        onLoginPage.verifyEmptyPasswordErrorAppeared();
        onLoginPage.setPassword(password);
        onLoginPage.clickLoginButton();
        onLoginPage.verifyEmptyUsernameErrorAppeared();
        onLoginPage.setUsername(userName);
        onLoginPage.clickLoginButton();
        onLoginPage.verifyEmptyPasswordErrorAppeared();
        onLoginPage.setUsername(userName);
        onLoginPage.setPassword(password);
        onLoginPage.clickLoginButton();
        onLoginPage.verifyLoginUnsuccessful();
    })

    it("Verify can login successfully ",() => {
        onLoginPage.setUsername(userName);
        onLoginPage.setPassword(password);
        onLoginPage.clickLoginButton();
        onLoginPage.verifyLoggedInSuccessfully();
    })
})