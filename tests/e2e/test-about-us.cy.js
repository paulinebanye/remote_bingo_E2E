// cypress/e2e/Remote_bingo/about-us.cy.js

describe('Remote Bingo About Us Page', () => {
  const baseUrl = 'https://staging.remote.bingo';
  const extendedTimeout = 10000; // 10 seconds timeout

  beforeEach(() => {
    cy.visit(`${baseUrl}/about-us`, { timeout: extendedTimeout });
  });

  it('Should navigate to About Us Page', () => {
    // Verify that the About Us link exists and is visible
    cy.get('h2', { timeout: extendedTimeout })
      .should('exist')
      .should('be.visible');

    // Verify that the About Us page URL is correct
    cy.url({ timeout: extendedTimeout }).should('include', '/about-us');

    // Verify that the About Us page heading is present
    cy.get('h2', { timeout: extendedTimeout }).should('contain.text', 'About Remote Bingo');

    // Verify that Key Benefits section is present
    cy.get('h5', { timeout: extendedTimeout }).should('contain.text', 'Key Benefits');

    // Verify that Why it Matters section is present
    cy.get('h4', { timeout: extendedTimeout }).should('contain.text', 'Why It Matters');
  });
});
