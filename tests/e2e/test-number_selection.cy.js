// cypress/e2e/Remote_bingo/number_selection.cy.js

describe('Remote Bingo create game in number mode', () => {
  const baseUrl = 'https://staging.remote.bingo';
  const extendedTimeout = 10000; // 10 seconds timeout
  
    beforeEach(() => {
      // visit the create game page before each test
      cy.visit(`${baseUrl}/create-game`, { timeout: extendedTimeout }); 
    });

    it('Should complete game creation in number mode', () => {
        // verify the Create Game section is present
        cy.get('h1', { timeout: extendedTimeout }).should('contain.text', 'Create Game');
       
        // Fill in the form to create a game
        cy.get('input[placeholder="User Name"]', { timeout: extendedTimeout }).type('jude'); 
        cy.get('input[placeholder="Team Name"]', { timeout: extendedTimeout }).type('Bellu'); 
        
        // Select the "Numbers" mode
        cy.get('button', { timeout: extendedTimeout }).contains('Numbers').click();

        // Select an image or icon (assuming the correct selector)
        cy.get(':nth-child(2) > .rounded-full', { timeout: extendedTimeout }).should('be.visible').click();

        // Set the prize name
        cy.get('input[placeholder="Name Prize"]', { timeout: extendedTimeout }).type('82'); 
        
        // Save and continue to the next step
        cy.get('button', { timeout: extendedTimeout }).contains('Save & Continue').click();
    });
});
