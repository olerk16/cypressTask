
describe('Simple Cypress Test', () => {
  it('Checks the greeting message', () => {
    cy.visit('http://localhost:8080');
    cy.get('#greeting').should('contain', 'Hello, World!');
  });
});
