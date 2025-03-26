// cypress/e2e/Remote_bingo/privacy_policy.cy.js

describe('Remote Bingo Privacy Policy Page', () => {
    const baseUrl = 'https://staging.remote.bingo';
    const extendedTimeout = 10000; // 10 seconds timeout
  
    beforeEach(() => {
      // visit the privacy policy page before each test
      cy.visit(`${baseUrl}/privacy`, { timeout: extendedTimeout });
    });
  
    it('Should navigate to Privacy Policy Page', () => {
      // Ensure the terms of service page sections
      cy.get('h2', { timeout: extendedTimeout }).should('contain.text', 'Privacy Policy');
      cy.get('h3', { timeout: extendedTimeout }).should('be.visible').should('contain.text', 'Information We Collect');
      cy.get('h3', { timeout: extendedTimeout }).should('be.visible').should('contain.text', 'How We Use Your Information');
      cy.get('h3', { timeout: extendedTimeout }).should('contain.text', 'How We Share Your Information');
      cy.get('h3', { timeout: extendedTimeout }).should('contain.text', 'Data Security');
      cy.get('h3', { timeout: extendedTimeout }).should('contain.text', 'Your Rights and Choices');
      
      
    });
  });
  