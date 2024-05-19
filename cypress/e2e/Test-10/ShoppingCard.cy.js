describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://magento.softwaretestingboard.com/what-is-new.html')
    cy.get('.product-items > :nth-child(3)').click()
    cy.get('#product-addtocart-button').click()
    cy.get('.showcart').click()
    cy.get('#ui-id-3 > span').click()
    cy.get('.product-items > :nth-child(2)').click()
    cy.get('#product-addtocart-button').click()
    cy.get('.showcart').click()
  })
})