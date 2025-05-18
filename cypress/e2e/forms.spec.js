describe('Form Test', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('should show error on empty submit', () => {
    cy.get('form').submit();
    cy.contains('Error').should('exist');  // تأكد من وجود رسالة الخطأ
  });
});
