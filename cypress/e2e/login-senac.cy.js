describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.sp.senac.br/')


    cy.get('.mburger').click()

    cy.get('#txtLoginNaoLogadoMob').click()

    cy.get('#login-email').type('heidrun3597@uorak.com')

    cy.get('#login-password').type('SenhaDoVictor')

    cy.get('#btnLoginHeader').click()

  })
})