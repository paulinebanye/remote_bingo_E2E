describe('Remote Bingo', () => {
  const baseUrl = 'https://staging.remote.bingo';
  const extendedTimeout = 10000; // 10 seconds timeout

  beforeEach(() => {
    // visit the base URL before each test
    cy.visit(`${baseUrl}`, { timeout: extendedTimeout });
  });

  describe('test homepage title', () => {   

    // verify that the page has the correct title
    it('verifys that the homepage title is correctly set', () => {
        cy.title()
          .should('eq', 'Bingo');
    });

    // verify that the title is not empty
    it('verifys that the homepage title is not empty', () => {
        cy.title()
          .should('not.be.empty');
    });
  });

  describe('test homepage header', () => {   

    // verify that the header is visible
    it('verifys that the header is visible', () => {
        cy.get('h1', {timeout: extendedTimeout})
          .should('be.visible');
    });

    // verify that the header contains the correct text
    it('verifys that the header contains the correct text', () => {
        cy.get('h1')
          .should('contain.text', 'Engage your team with online bingo!');
    });
  });

  describe('test elements on the homepage navigation bar', () => {
    // verify that the navigation bar is visible
    it('test that nabvar is visible when the page loads', () => {
        cy.get('nav').should('be.visible');
    });
            
    it('test logo is visible and functional', () => {
        // verify that the logo is visible
        cy.get('nav a[href="/"] img', {timeout: extendedTimeout})
          .should('be.visible')
          .and('have.attr', 'alt', 'Remote Bingo');
        
        // click the logo
        cy.get('nav a[href="/"]')
          .click();

        // verify that clicking the logo redirects to the homepage
        cy.url({timeout: extendedTimeout})
          .should('eq', Cypress.config('baseUrl') + '/');             
    });   

    it('test "How to Play" button is visible', () => {
        // verify that the "How to Play" button is visible
        cy.get('nav')
          .contains('How to play')
          .should('be.visible')
          .and('not.be.disabled');

        // verify the content of the How to play text
        cy.get('nav')
          .contains('How to play')
          .should('contain.text', 'How to play');
    });   
  });

  describe('verify authentication buttons on landing page', () => {
    it('test "Login" button is visible and functional', () => {
        // verify that the "Login" button is visible, and has the correct text
        cy.get('button', { timeout: extendedTimeout })
          .contains('Login')
          .should('be.visible')
          .and('not.be.disabled')
          .and('have.attr', 'type', 'button')
          .and('have.attr', 'role', 'button'); 

        // verify the href attribute of the parent <a> tag
        cy.get('button', { timeout: extendedTimeout })
          .contains('Login')
          .parents('a')
          .should('have.attr', 'href', '/auth/login');

        // click the "Login" button
        cy.get('button', { timeout: extendedTimeout })
          .contains('Login')
          .click();

        // verify that clicking the button redirects the user to the login page
        cy.url({ timeout: extendedTimeout })
          .should('include', '/auth/login');
    });

    // verify that the signup button is visible and has the correct text
    it('Test signup button', () => {
        cy.get('a', {timeout: extendedTimeout})
          .should('be.visible')
          .should('not.be.disabled')
          .contains('Signup')
          .click();

        // verify that clicking the button redirects to the signup page
        cy.url()
          .should('include', '/auth/signup');
    });
  });
  
  describe('test create bingo game button', () => {   
    // verify that the "Create a Bingo Game" button is visible
    it('verify that the "Create a Bingo Game" button is visible', () => {
        cy.get('button')
          .contains('Create a Bingo Game')
          .should('be.visible')
          .and('not.be.disabled');
    });

    // verify that the create bingo game button has the correct attributes
    it('verify that the "Create a Bingo Game" button has the correct attributes', () => {
        cy.get('button')
          .contains('Create a Bingo Game')
          .should('have.attr', 'type', 'button');
    });

    // verify the create bingo game button URL
    it('verifys that clicking the "Create a Bingo Game" button redirects to the create game page', () => {
        cy.get('button')
          .contains('Create a Bingo Game')
          .click();

        // verify that the URL redirects to the correct page ("/create-game")
        cy.url({ timeout: extendedTimeout })
          .should('include', '/create-game');
    });
  });

  // verify that a user can enter a game pin and click the "Join Bingo" button
  describe('test that a user can enter a game pin and click join bingo game button', () => {   
    // test the game pin input field
    describe('test game pin input field', () => {   
        // verify that the form is visible
        it('verifys that the form is visible', () => {
            cy.get('form')
                .should('be.visible');
        });

        // verify that the input field is present within the form
        it('verifys that the input field is present within the form', () => {
            cy.get('form')
                .within(() => {
                cy.get('input[placeholder="Enter Game Pin/Link"]')
                    .should('be.visible');
                });
        });

        // verify that the input field is not disabled
        it('verifys that the input field is not disabled', () => {
            cy.get('form')
            .within(() => {
                cy.get('input[placeholder="Enter Game Pin/Link"]')
                .should('not.be.disabled');
            });
        });
    });
    

    describe('test "Join Bingo" button', () => {   
        // verify that the button is visible
        it('verifys that the "Join Bingo" button is visible', () => {
            cy.get('button')
                .contains('Join Bingo')
                .should('be.visible')
                .and('not.be.disabled');
        });

        // verify that the join button has specific properties
        it('verifys that the "Join Bingo" button has the correct attributes', () => {
            cy.get('button')
                .contains('Join Bingo')
                .should('have.attr', 'type', 'submit');
        });

        // verify the join button url
        it('verify the "Join Bingo" button URL', () => {
            cy.get('button')
                .contains('Join Bingo')
                .click();

            // verify that the URL redirects to the correct page ("/join-game")
            cy.url({timeout: extendedTimeout})
                .should('include', '/join-game');
        });
    });
  });   

  describe('verify that the "about" button on the footer links to the correct page', () => {
      
    it('test "About" button is visible and functional', () => {
        // verify that the "About" button is visible, and has the correct text
        cy.get('footer a', {timeout: extendedTimeout})
          .contains('About')
          .should('be.visible')
          .and('not.be.disabled');
        
        // verify if the `href` attribute is about-us 
        cy.get('footer a')
          .contains('About')
          .should('have.attr', 'href', '/about-us');
        
        // verify the text content
        cy.get('footer a')
          .contains('About')
          .should('contain.text', 'About');

        // click the "About" button
        cy.get('footer a')
          .contains('About')
          .click();

        // verify that clicking the button redirects to the page with information about Remote Bingo
        cy.url({timeout: extendedTimeout})
          .should('include', '/about-us');             
    });   
  });

  describe('verify that the "contact" button on the footer links to external page', () => {
      
    it('test "Contact" button is visible and functional', () => {
        // verify that the "Contact" button is visible, and has the correct text
        cy.get('footer a', {timeout: extendedTimeout})
          .contains('Contact')
          .should('be.visible')
          .and('not.be.disabled');
        
        // verify if the `href` attribute is contact-us-faq 
        cy.get('footer a')
          .contains('Contact')
          .should('have.attr', 'href', '/contact-us-faq');
        
        // verify the text content
        cy.get('footer a')
          .contains('Contact')
          .should('contain.text', 'Contact');

        // click the "Contact" button
        cy.get('footer a')
          .contains('Contact')
          .click();

        // verify that clicking the button redirects to the page with information about contacting Remote Bingo staff
        cy.url({timeout: extendedTimeout})
          .should('include', '/contact-us-faq');             
    });   
  });

  describe('verify that the "How to play" button on the footer links to external page', () => {
    it('test "How to play" button is visible and functional', () => {
      // verify that the "How to play" button is visible, and has the correct text
      cy.get('footer a', {timeout: extendedTimeout})
        .contains('How to play')
        .should('be.visible')
        .and('not.be.disabled');
      
      // verify if the `href` attribute is how-to-play 
      cy.get('footer a')
        .contains('How to play')
        .should('have.attr', 'href', '/how-to-play');
      
      // verify the text content
      cy.get('footer a')
        .contains('How to play')
        .should('contain.text', 'How to play');

      // click the "How to play" button
      cy.get('footer a')
        .contains('How to play')
        .click();

      // verify that clicking the button redirects to the page with the game rules
      cy.url({timeout: extendedTimeout})
        .should('include', '/how-to-play');             
    });
  }); 

  describe('verify that the "privacy policy" button on the footer links to external page', () => {
      
    it('test "Privacy Policy" button is visible and functional', () => {
        // verify that the "Privacy Policy" button is visible, and has the correct text
        cy.get('footer a', {timeout: extendedTimeout})
          .contains('Privacy Policy')
          .should('be.visible')
          .and('not.be.disabled');
        
        // verify if the `href` attribute is privacy 
        cy.get('footer a')
          .contains('Privacy Policy')
          .should('have.attr', 'href', '/privacy');
        
        // verify the text content
        cy.get('footer a')
          .contains('Privacy Policy')
          .should('contain.text', 'Privacy Policy');

        // click the "Privacy Policy" button
        cy.get('footer a')
          .contains('Privacy Policy')
          .click();

        // verify that clicking the button redirects to the page with information about Remote Bingo's privacy policy 
        cy.url({timeout: extendedTimeout})
          .should('include', '/privacy');             
    });   
  });

  describe('verify that the "terms of service" button on the footer links to external page', () => {
      
    it('test "Terms of Service" button is visible and functional', () => {
        // verify that the "Terms of Service" button is visible, and has the correct text
        cy.get('footer a', {timeout: extendedTimeout})
          .contains('Terms of Service')
          .should('be.visible')
          .and('not.be.disabled');
        
        // verify if the `href` attribute is privacy 
        cy.get('footer a')
          .contains('Terms of Service')
          .should('have.attr', 'href', '/terms-of-service');
        
        // verify the text content
        cy.get('footer a')
          .contains('Terms of Service')
          .should('contain.text', 'Terms of Service');

        // click the "Terms of Service" button
        cy.get('footer a')
          .contains('Terms of Service')
          .click();

        // verify that clicking the button redirects to the page with information about Remote Bingo's terms of service 
        cy.url({timeout: extendedTimeout})
          .should('include', '/terms-of-service');             
    });   
  });         
});
