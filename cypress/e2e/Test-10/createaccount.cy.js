import RegistrationPage from '../../support/registrationPage'

describe('Pembuatan Akun', () => {
  const names = ['Adi', 'Ahmad', 'Budi', 'Bayu', 'Ucup', 'Emil', 'James', 'Daniel', 'Udin']

  function randomEmail() {
    const randomString = Math.random().toString(36).substring(2, 10)
    const email = randomString + "@gmail.com"
    return email
  }

  function randomfname() {
    const randomIndex = Math.floor(Math.random() * names.length)
    return names[randomIndex]
  }

  function randomlname() {
    const randomIndex = Math.floor(Math.random() * names.length)
    return names[randomIndex]
  }

  let userEmail = randomEmail()
  let firstName = randomfname()
  let lastName = randomlname()
  const registrationPage = new RegistrationPage()

  beforeEach(() => {
    registrationPage.visit()
  })

  it('Mengisi Form Pembuatan Akun dengan Password Lemah', () => {
    registrationPage.fillFirstName(firstName)
    registrationPage.fillLastName(lastName)
    registrationPage.fillEmail(userEmail)
    registrationPage.fillPassword('Password')
    registrationPage.confirmPassword('Password')
    cy.get('.password-weak').should('be.visible')
  })


  it('Mengisi Form Pembuatan Akun dengan email yang sudah terdaftar', () => {
    cy.fixture('users.json').then((users)=> { 
    cy.get('#firstname').type(users.firstName)
    cy.get('#lastname').type(users.lastName)
    cy.get('#email_address').type(users.email)
    cy.get('#password').type('password123#')
    cy.get('#password-confirmation').type('password123#')
    registrationPage.submitForm()
    cy.contains('There is already an account with this email address. If you are sure that it is your email address, ').should('be.visible');
    })
  })


      it('Mengisi Form Pembuatan Akun dengan password berbeda dengan confirm password', () => {
        registrationPage.fillFirstName(firstName)
        registrationPage.fillLastName(lastName)
        registrationPage.fillEmail(userEmail)
        registrationPage.fillPassword('password123#')
        registrationPage.confirmPassword('password456#')
        registrationPage.submitForm()
        cy.contains('Please enter the same value again').should('be.visible')
      })

      it('Mengisi Form Pembuatan Akun dengan Informasi Valid', () => {
        registrationPage.fillFirstName(firstName)
        registrationPage.fillLastName(lastName)
        registrationPage.fillEmail(userEmail)
        registrationPage.fillPassword('password123#')
        registrationPage.confirmPassword('password123#')
        registrationPage.submitForm()
        cy.url().should('include', '/customer/account/')
  })
})