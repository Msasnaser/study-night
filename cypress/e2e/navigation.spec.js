describe('Navigation Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to Home page', () => {
    cy.get('#homePage').click();
    cy.contains('Study Night').should('exist');
  });

  it('should navigate to About page', () => {
    cy.get('#aboutPage').click();
    cy.contains('About Study Night').should('exist');
  });

  it('should navigate to Card Sets page', () => {
    cy.get('#cardSetPage').click();
    cy.contains('Card Sets').should('exist');
  });
});
