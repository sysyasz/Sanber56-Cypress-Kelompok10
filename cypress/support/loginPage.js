class LoginPage {
  visit() {
cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
}

fillEmail(email) {
// cy.get('input[name="coba.test@gmail.com"]').type(email)
cy.get('#email').type(email)
}

fillPassword(password) {
// cy.get('input[name="password123#"]').type(password)
cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password)
}

clickLoginButton() {
// cy.get('button[type="submit"]').click()
cy.get('#send2').click()
}}

export default new LoginPage()