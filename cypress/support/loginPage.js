class LoginPage {

    visit() {
  cy.visit('https://magento.softwaretestingboard.com/')
}

fillEmail(email) {
  cy.get('input[name="coba.test@gmail.com"]').type(email)
}

fillPassword(password) {
  cy.get('input[name="password123#"]').type(password)
}

clickLoginButton() {
  cy.get('button[type="submit"]').click()
}}

export default new LoginPage()