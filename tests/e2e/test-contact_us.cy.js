// cypress/e2e/Remote_bingo/contact_us.cy.js

describe('Remote Bingo Contact Us Page', () => {
    const baseUrl = 'https://staging.remote.bingo';
    const extendedTimeout = 10000; // 10 seconds timeout
  
    beforeEach(() => {
      // Visit the Contact Us page before each test
      cy.visit(`${baseUrl}/contact-us`, { timeout: extendedTimeout });
    });
  
    it('should display Contact Us button', () => {
      // Verify the Contact Us button is visible and functional
      cy.get('button', { timeout: extendedTimeout })
        .contains('Contact Our Support Team')
        .should('be.visible')
        .click();
    });

    it('should verify input fields of Contact Us section', () => {
      // Fill in the form fields
      cy.get('button', { timeout: extendedTimeout }).contains('Contact Our Support Team').click();
      cy.get('input[placeholder="Enter your name"]', { timeout: extendedTimeout }).type('John Doe'); 
      cy.get('input[placeholder="Enter email address"]', { timeout: extendedTimeout }).type('johndoe@example.com'); 
      cy.get('div.border-solid > .py-3', { timeout: extendedTimeout }).click();
      cy.get('.cursor-pointer > :nth-child(5)', { timeout: extendedTimeout }).contains('Social group')
        .should('be.visible')
        .click(); 
      cy.get('input[placeholder="Enter subject"]', { timeout: extendedTimeout }).type('How do i play your game'); 
      cy.get('textarea.min-h-\\[10rem\\]', { timeout: extendedTimeout })
      .should('be.visible') 
      .type('This is a test message.');
      cy.get('.md\\:w-\\[10rem\\] > .flex', { timeout: extendedTimeout })
        .should('be.visible') 
        .click();   
    
    });

    
});
