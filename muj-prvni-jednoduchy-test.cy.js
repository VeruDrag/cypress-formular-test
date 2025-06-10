Cypress.on('uncaught:exception', () => false); // Ignoruj chyby z jiných skriptů

describe('Test formuláře s komentáři', () => {

  beforeEach(() => {
    cy.visit('https://demoqa.com/text-box'); // Spouští se před každým testem
  });

  it('Vyplní formulář a ověří výsledek (pozitivní test)', () => {
    cy.get('#userName').type('Veronika');
    cy.get('#userEmail').type('veronika@test.cz');
    cy.get('#currentAddress').type('Plzeň');
    cy.get('#permanentAddress').type('Praha');
    cy.get('#submit').click();

    cy.get('#output').should('be.visible');
    cy.get('#name').should('contain', 'Veronika');
    cy.get('#email').should('contain', 'veronika@test.cz');
  });

  it('Neodešle formulář s chybným e-mailem (negativní test)', () => {
    cy.get('#userName').type('Veronika');
    cy.get('#userEmail').type('veronika-neplatny-email'); // Chybný e-mail
    cy.get('#submit').click();

    // E-mailové pole má červený rámeček (neprojde validací HTML5)
    cy.get('#userEmail:invalid').should('exist');
  });

});
