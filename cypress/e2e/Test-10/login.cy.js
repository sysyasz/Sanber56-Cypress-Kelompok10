import loginPage from '../../support/loginPage'

describe ('Login Testing', () => {
beforeEach(() => {
        loginPage.visit()
},
    it ('Success Login dengan Email dan Password terdaftar', () => {
        // loginPage.visit()
        loginPage.fillEmail('coba.test@gmail.com')
        loginPage.fillPassword('password123#')
        loginPage.clickLoginButton()
        cy.url().should('be.visible')
    }),

    it ('Gagal Login karena password salah', () => {
        // loginPage.visit()
        loginPage.fillEmail('coba.test@gmail.com')
        loginPage.fillPassword('password456')
        loginPage.clickLoginButton()
        // cy.url().should('include', 'The account sign-in was incorrest or your account is disable temporary. Please wait try again later.')
    }),

    it ('Gagal Login karena email salah/tidak terdaftar', () => {
        // loginPage.visit()
        loginPage.fillEmail('abc@gmail.com')
        loginPage.fillPassword('password123#')
        loginPage.clickLoginButton()
        // cy.url().should('include', 'The account sign-in was incorrest or your account is disable temporary. Please wait try again later.')
    }),

    it.only ('Gagal Login karena field password kosong', () => {
        // loginPage.visit()
        loginPage.fillEmail('coba.test@gmail.com')
        loginPage.clickLoginButton()
        // cy.url().should('include', 'The account sign-in was incorrest or your account is disable temporary. Please wait try again later.')
    }),

    it.only ('Gagal Login karena field email kosong', () => {
        // loginPage.visit()
        loginPage.fillPassword('password123#')
        loginPage.clickLoginButton()
        // cy.url().should('include', 'The account sign-in was incorrest or your account is disable temporary. Please wait try again later.')
    })
)})