Cypress.on('uncaught:exception', () => false); 
// Pokud se na stránce vyskytne chyba (např. z reklamy), Cypress ji ignoruje a test pokračuje

describe('Formulářový test', () => { 
  // Začíná skupina testů – můžu jí dát jakýkoli název, describe je pojmenování testu

  it('Vyplní jméno a e-mail', () => { 
    //   () = funkce nemá žádné vstupy (test si nic neptá), 
    //   => = moderní zápis v JavaScriptu (říká: „spustím tohle“)
    //   { = začátek toho, co se má spustit (tzv. tělo testu)
    // Jeden konkrétní testovací scénář – co se má ověřit

    cy.visit('https://demoqa.com/text-box');  //cy. Říká: „Tento příkaz patří Cypressu.“
    // Otevře webovou stránku s formulářem

    cy.get('#userName').type('Veronika'); 
    // Najde políčko pro jméno (má ID "userName") a napíše tam "Veronika"

    cy.get('#userEmail').type('veronika@test.cz'); 
    // Najde políčko pro e-mail a napíše tam "veronika@test.cz"

    cy.get('#submit').click(); 
    // Najde tlačítko "Submit" (Odeslat) a klikne na něj

    cy.get('#output').should('be.visible'); 
    // Ověří, že se pod formulářem zobrazil výsledek (blok s ID "output")
    //Když použiješ .should(...), říkáš Cypressu: „Neudělej žádnou akci. Jen se podívej, jestli to platí.“ be.vidible = je vidět

    cy.get('#name').should('contain', 'Veronika'); 
    // Ověří, že ve výsledku je uvedené jméno "Veronika". contain = obsahuje.
    // .should('contain', 'něco')	Ověří, že prvek obsahuje daný text
    // cy.get('#name') = „Najdi prvek na stránce, který má id="name"“
    // .get doslova zanmená: „Najdi na stránce nějaký prvek.“

    cy.get('#email').should('contain', 'veronika@test.cz'); 
    // Ověří, že ve výsledku je uvedený e-mail "veronika@test.cz"

  }); //   } = konec těla testu, ) = konec volání funkce,  ; = ukončení věty (jako tečka)

}); 
// Konec testu – uzavíráme celou strukturu

//Když použiješ .should(...), říkáš Cypressu: „Neudělej žádnou akci. Jen se podívej, jestli to platí.“
