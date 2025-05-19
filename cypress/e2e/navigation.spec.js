describe('Navigation Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const pages = [
    { nav: 'nav_home', expectedText: 'Study Night' },
    { nav: 'nav_about', expectedText: 'About Study Night' },
    { nav: 'nav_cardsets', expectedText: 'Card Sets' }
  ];

  pages.forEach(({ nav, expectedText }) => {
    it(`should navigate to ${expectedText} page`, () => {
      cy.get(`[data-cy=${nav}]`).click();
      cy.contains(expectedText).should('exist');
    });
  });
});
