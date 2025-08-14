
describe('Hacker Escape Rooms – Start Page', () => {
  it('Should load the start page and display correct heading', () => {
    cy.visit('/index.html'); 

    
    cy.get('h1.header__title')
      .should('be.visible')
      .invoke('text')
      .then(t => t.trim())
      .should('eq', 'Hacker Escape Rooms'); 
  });
});
