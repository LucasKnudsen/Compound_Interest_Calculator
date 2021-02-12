describe('Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001')
  })

  it('displays the 4 input fields', () => {
    cy.get('.start').type('25000')
    cy.get('.monthly').type('1000')
    cy.get('.interest').type('7')
    cy.get('.time').type('20')
    cy.get('.profit').should('contain', '621.895 kr')
  })
})