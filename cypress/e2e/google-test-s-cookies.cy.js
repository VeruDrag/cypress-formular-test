describe('Test s podmínkou na cookie banner', () => {
  it('Otevře Google a klikne na cookies, pokud existují', () => {
    cy.visit('https://www.google.com');

    cy.get('button').then(($buttons) => {
      const prijmout = [...$buttons].find(b => b.innerText.includes('Přijmout'));

      if (prijmout) {
        cy.wrap(prijmout).click({ force: true });
      }
    });

    cy.title().should('include', 'Google');
  });
});
