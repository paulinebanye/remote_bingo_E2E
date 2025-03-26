// cypress/e2e/Remote_bingo/contact_us.cy.js

describe('Remote Bingo Contact Us Page', () => {
  const baseUrl = 'https://staging.remote.bingo';
  const extendedTimeout = 10000; // 10 seconds timeout
  
    beforeEach(() => {
    // Visit the Contact Us page before each test
    cy.visit(`${baseUrl}/faq`, { timeout: extendedTimeout }); // 10-second timeout for the page to load
  });


  it('should test the Faq page and its funtions', () => {
    //Verify the FAQ page
    cy.get('button', { timeout: extendedTimeout }).contains('Frequently Asked Questions').click();

    //Verify FAQ questions
    cy.get('.md\\:grid > :nth-child(1) > .flex', { timeout: 5000 })
      .should('be.visible') // Ensure it's visible before interacting
      .click();   

    cy.get('.md\\:grid > :nth-child(2) > .flex', { timeout: 5000 })
      .should('be.visible') // Ensure it's visible before interacting
      .click();   


  })

});
