class editaccount {
    email = '#email'
    pswlogin = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'
    login_btn = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span'
    changeemail_btn = '#change-email'
    changepsw_btn = '#change-password'
    save_btn = '#form-validate > .actions-toolbar > div.primary > .action > span'
    currentpassw = '#current-password'
    newpassw = '#password'
    confirmnewpassw = '#password-confirmation'


    visitlogin(){
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
      }
    visiteditaccount(){
        cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
      }
      
    inputEmail(email){
        cy.get(this.email).type(email)
    }
    inputPsw(pswlogin){
        cy.get(this.pswlogin).type(pswlogin)
    }
    clickLogin(){
        cy.get(this.login_btn).click()
      }
    editEmail(){
        cy.get(this.changeemail_btn).click()
    }
    editPsw(){
        cy.get(this.changepsw_btn).click()
    }
    clickSave(){
        cy.get(this.save_btn).click()
    }
    inputCurrentPsw(pswcurrent){
        cy.get(this.currentpassw).type(pswcurrent)
    }
    inputNewPsw(pswnew){
        cy.get(this.newpassw).type(pswnew)
    }
    inputConfirmNewPsw(pswconfirm){
        cy.get(this.confirmnewpassw).type(pswconfirm)
    }

    }
      
      export default new editaccount()
