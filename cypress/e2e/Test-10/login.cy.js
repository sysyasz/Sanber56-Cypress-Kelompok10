import loginPage from '../../support/loginPage'

describe ('Login Testing', () => {
beforeEach(() => {
        loginPage.visit()
},
    it('Success Login dengan Email dan Password terdaftar', () => {
        loginPage.visit()
        loginPage.fillEmail('setia123@gmail.com')
        loginPage.fillPassword('setia123.')
        loginPage.clickLoginButton()
        cy.url().should('include', 'customer/account')
    }),

    it ('Gagal Login karena password salah', () => {
        loginPage.visit()
        loginPage.fillEmail('coba.test@gmail.com')
        loginPage.fillPassword('password456')
        loginPage.clickLoginButton()
        loginPage.verifyError()
    }),

    it ('Gagal Login karena email salah/tidak terdaftar', () => {
        loginPage.visit()
        loginPage.fillEmail('abc@gmail.com')
        loginPage.fillPassword('password123#')
        loginPage.clickLoginButton()
        loginPage.verifyError()
    }),

    it ('Gagal Login karena field password kosong', () => {
        loginPage.visit()
        loginPage.fillEmail('coba.test@gmail.com')
        loginPage.clickLoginButton()
        cy.get('#pass-error').should('contain.text', 'This is a required field.')
    }),

    it ('Gagal Login karena field email kosong', () => {
        loginPage.visit()
        loginPage.fillPassword('password123#')
        loginPage.clickLoginButton()
        cy.get('#email-error').should('contain.text', 'This is a required field.')
    })
)})