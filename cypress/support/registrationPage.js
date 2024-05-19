class RegistrationPage {
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    }
  
    fillFirstName(firstName) {
      cy.get('#firstname').type(firstName)
    }
  
    fillLastName(lastName) {
      cy.get('#lastname').type(lastName)
    }
  
    fillEmail(email) {
      cy.get('#email_address').type(email)
    }
  
    fillPassword(password) {
      cy.get('#password').type(password)
    }
  
    confirmPassword(password) {
      cy.get('#password-confirmation').type(password)
    }
  
    submitForm() {
      cy.get('.submit').click()
    }
  
    getMessages() {
      return cy.get('.messages');
    }
  }
  
  export default RegistrationPage;