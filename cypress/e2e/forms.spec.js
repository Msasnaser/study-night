describe('Study Set Form Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy=nav_cardsets]').click(); 
  });

  it('should show error when submitting empty form', () => {
    cy.get('[data-cy=set_form]').submit();
    cy.contains('TITLE CANNOT BE EMPTY').should('exist');
  });

  it('should submit form with valid title', () => {
    cy.get('[data-cy=set_form] input').type('My Biology Set');
    cy.get('[data-cy=set_form]').submit();

    cy.contains('My Biology Set').should('exist');
  });
});

