import loginPage from '../../support/loginPage'

describe ('Login Testing', () => {
    beforeEach(() => {
        loginPage.visit()

    it ('Success Login dengan Email dan Password terdaftar', () => {
        loginPage.visit()
        loginPage.fillEmail('coba.test@gmail.com')
        loginPage.fillPassword('password123#')
        loginPage.clickLoginButton()
        cy.url().should('be.visible')
    })

    it ('Gagal Login karena password salah', () => {
        loginPage.visit()
        loginPage.fillEmail('coba.test@gmail.com')
        loginPage.fillPassword('password456')
        loginPage.clickLoginButton()
        cy.url().should('include', 'Password yang anda masukkan salah!')
    })

    it ('Gagal Login karena email salah/tidak terdaftar', () => {
        loginPage.visit()
        loginPage.fillEmail('abc@gmail.com')
        loginPage.fillPassword('password123#')
        loginPage.clickLoginButton()
        cy.url().should('include', 'Email yang anda masukkan salah/tidak terdaftar!')
    })
})})