describe('Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001')
  })

  it('displays the 4 input fields', () => {
    cy.get('.start').should('exist')
    cy.get('.monthly').should('exist')
    cy.get('.interest').should('exist')
    cy.get('.time').should('exist')
    cy.get('.profit').should('contain', '1.142.822 kr')
  })
})