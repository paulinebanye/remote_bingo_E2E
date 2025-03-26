// cypress/e2e/Remote_bingo/terms_of_service.cy.js

describe('Remote Bingo Terms of service Page', () => {
    const baseUrl = 'https://staging.remote.bingo';
    const extendedTimeout = 10000; // 10 seconds timeout
  
    beforeEach(() => {
      // visit the terms of service page before each test
      cy.visit(`${baseUrl}/terms-of-service`, { timeout: extendedTimeout });
    });
  
    it('Should navigate to Terms of service Page', () => {
      // verify the terms of service page sections
      cy.get('h2', { timeout: extendedTimeout }).should('contain.text', 'Terms of Service');
      cy.get('h3', { timeout: extendedTimeout }).should('be.visible').should('contain.text', 'Acceptance of Terms');
      cy.get('h3', { timeout: extendedTimeout }).should('be.visible').should('contain.text', 'Eligibility');
      cy.get('h3', { timeout: extendedTimeout }).should('contain.text', 'Account Registration');
      cy.get('h3', { timeout: extendedTimeout }).should('contain.text', 'Use of the Service');
      cy.get('h3', { timeout: extendedTimeout }).should('contain.text', 'User Content');
      cy.get('h3', { timeout: extendedTimeout }).should('contain.text', 'Game Creation and Participation');
      cy.get('h3', { timeout: extendedTimeout }).should('contain.text', 'Payment and Subscriptions');
      cy.get('h3', { timeout: extendedTimeout }).should('contain.text', 'Termination');
      cy.get('h3', { timeout: extendedTimeout }).should('contain.text', 'Intellectual Property');
      cy.get('h3', { timeout: extendedTimeout }).should('contain.text', 'Disclaimers');
      cy.get('h3', { timeout: extendedTimeout }).should('contain.text', 'Governing Law and Dispute Resolution');
      cy.get('h3', { timeout: extendedTimeout }).should('contain.text', 'Changes to These Terms');
      cy.get('h3', { timeout: extendedTimeout }).should('contain.text', 'Contact Us');


      // Verify that contact us email is clickable
      cy.get('a.text-primary-500[href=""]', { timeout: extendedTimeout }).should('be.visible').click();

    });
  });
  