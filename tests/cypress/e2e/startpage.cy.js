// cypress/e2e/home.cy.js
describe('Hacker Escape Rooms – Start Page', () => {
  it('Should load the start page and display correct heading', () => {
    cy.visit('/index.html'); // eller bara '/' om det funkar i din server

    // Matcha ENBART huvudrubriken
    cy.get('h1.header__title')
      .should('be.visible')
      .invoke('text')
      .then(t => t.trim())
      .should('eq', 'Hacker Escape Rooms'); // <-- rätt förväntad text
  });
});
