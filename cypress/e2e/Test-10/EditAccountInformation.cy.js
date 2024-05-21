import editaccountPage from '../../support/editaccountPage'

describe('Edit Account Information and Address Testing', () => {
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

  it('Failed Edit Adress - Empty City', () => {
    editaccountPage.visiteditadress()
    cy.get('#city').clear()
    editaccountPage.clickSaveAddress()
    cy.get('#city-error').should('contain.text','This is a required field.')
  })

  it('Success Edit Adress', () => {
    //Edit Adress berhasil tapi terdapat uncaught expection error mungkin karena ada tanda peringatan pada It's a default billing address. dan It's a default shipping address.
    editaccountPage.visiteditadress()
    cy.get('#region_id').select('Arizona')
    editaccountPage.clickSaveAddress()
    cy.get('.message-success > div').should('contain.text','You saved the address.')
  })
})