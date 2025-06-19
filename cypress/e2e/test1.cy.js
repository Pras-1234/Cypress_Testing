describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('include','OrangeHRM')
    .and('contain','HRM')


  })
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('contain','demo')
    cy.xpath("//a").should('have.length',3)



  })

})