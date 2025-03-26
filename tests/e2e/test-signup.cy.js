describe('User Signup Test Suite', () => {
  const baseUrl = 'https://staging.remote.bingo';
  const extendedTimeout = 10000;
  
  beforeEach(() => {
    // visit the signup page before each test
    cy.visit(`${baseUrl}/auth/signup`, { timeout: extendedTimeout });
  });
  
  it('Verify that user is unable to signup with invalid email format', () => {

    cy.get('input[name="username"]').type('Specish');
    cy.get('input[name="email"]').type('menu.com');
    cy.get('input[name="password"]').type('Edwin1@kels');
    cy.get('button').contains('Sign Up').click();
  
  });

  it('Verify that user is able to Sign Up with valid email and password', () => {
    cy.get('input[name="username"]').type('Specish');
    cy.get('input[name="email"]').type('specm@mailinator.com');
    cy.get('input[name="password"]').type('Edwin1@kels');
    cy.get('button').contains('Sign Up').click();
    cy.contains('Signup successful')
  })

  it('Verify that user is able to Sign Up using google', () => {
    cy.get('button')
      .contains('Sign Up with Google')
      .should('be.visible')
      .click();
  })

  it('Verify that user is able to Sign Up using Facebook', () => {
    cy.get('button')
      .contains('Sign Up with Facebook')
      .should('be.visible')
      .click();
  })

  it('Verify that presence of the text at the footer', () => {
    cy.get('p.text-center.text-sm.md\\:text-base.flex.gap-2.justify-center.items-center')
    .should('contain.text', 'Have an account?')
    .find('a')
    .should('have.text', 'Sign In')
    .and('have.attr', 'href', '/auth/login');
  })
});
  
  