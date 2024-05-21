import editaccountPage from '../../support/editaccountPage'

describe('Edit Account Information Testing', () => {
  beforeEach(() => {
    editaccountPage.visitlogin()
    editaccountPage.inputEmail('setia123@gmail.com')
    editaccountPage.inputPsw('setia123.')
    editaccountPage.clickLogin()
  })

  it('Failed Edit Email - empty Password', () => {
    editaccountPage.visiteditaccount()
    editaccountPage.editEmail()
    editaccountPage.clickSave()
    cy.get('#current-password-error').should('contain.text','This is a required field.')
  })

  it('Failed Edit Password - Invalid Confirm Password', () => {
    editaccountPage.visiteditaccount()
    editaccountPage.editPsw()
    editaccountPage.inputCurrentPsw('setia123.')
    editaccountPage.inputNewPsw('setia12345.')
    editaccountPage.inputConfirmNewPsw('salah')
    editaccountPage.clickSave()
    cy.get('#password-confirmation-error').should('contain.text','Please enter the same value again.')
  })

  it('Failed Edit Password - Password Strength : Weak', () => {
    editaccountPage.visiteditaccount()
    editaccountPage.editPsw()
    editaccountPage.inputCurrentPsw('setia123.')
    editaccountPage.inputNewPsw('setia12345')
    editaccountPage.inputConfirmNewPsw('setia12345')
    editaccountPage.clickSave()
    cy.get('#password-error').should('contain.text','Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
  })

})