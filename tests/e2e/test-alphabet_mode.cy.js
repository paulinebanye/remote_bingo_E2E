// cypress/e2e/Remote_bingo/alphabet_mode.cy.js

describe('Remote Bingo create game in alphabet mode', () => {
    const baseUrl = 'https://staging.remote.bingo';
    const extendedTimeout = 10000; // 10 seconds timeout
  
    beforeEach(() => {
      // visit the Contact Us page before each test
      cy.visit(`${baseUrl}/create-game`, { timeout: extendedTimeout });
    });

    it('Should complete game creation in alphabet mode', () => {
        //verify that there is a create game section
        cy.get('h1', { timeout: extendedTimeout }).should('contain.text', 'Create Game');
       
        // create a game and generate code
        cy.get('input[placeholder="User Name"]', { timeout: extendedTimeout }).type('kenry'); 
        cy.get('input[placeholder="Team Name"]', { timeout: extendedTimeout }).type('Balon'); 
        cy.get('button', { timeout: extendedTimeout }).contains('Alphabets').click();
        cy.get('input[placeholder="Name Prize"]', { timeout: extendedTimeout }).type('88'); 
        cy.get('button', { timeout: extendedTimeout }).contains('Save & Continue').click();
    });
});

