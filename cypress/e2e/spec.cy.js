
describe('Simple Cypress Test', () => {
  it('Checks the greeting message', () => {
    cy.visit('http://localhost:8080');
    cy.get('#greeting').should('contain', 'Hello, World!');
  });
});

describe('Navigation Test', () => {
  it('Should navigate to the About Us page when clicking the About link', () => {
    // Visit the homepage
    cy.visit('http://localhost:8080');

    // Click on the About Us link
    cy.get('#about-link').click();

    // Verify that the new page contains the correct content
    cy.url().should('include', '/about.html');
    cy.contains('h1', 'About Our Website');
    cy.contains('p', 'Welcome to the about us page.');
  });
});

