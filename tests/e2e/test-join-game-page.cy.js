describe('Remote Bingo', () => {
    const baseUrl = 'https://staging.remote.bingo';
    const extendedTimeout = 10000; // 10 seconds timeout
    const roomId = '586f2168-1f69-4c4b-84b1-23ac59aa0c02'
  
    beforeEach(() => {
        // visit the game room page before each test
        cy.visit(`${baseUrl}/join-game?roomId=${roomId}`, {timeout: extendedTimeout});
        cy.get('body', { timeout: extendedTimeout })
        .should('be.visible');
      });

    describe('test join game page title', () => {   
        // verify that the page has the correct title
        it('check that the join game page title is visible and contain the correct text', () => {
            cy.get('h3', { timeout: extendedTimeout })
              .should('be.visible')
              .contains('Join Game');
        });

        // verify that the title is not empty
        it('checks that the join game title is not empty', () => {
            cy.get('h3', { timeout: extendedTimeout })
              .should('not.be.empty');
        });
    });


    describe('test join game form', () => {

        describe('test gameId input field', () => {
            // verify game id label
            it('check that the Game ID field has a label', () => {
                cy.get('input#gameId', { timeout: extendedTimeout })
                    .closest('div')
                    .find('label')
                    .should('be.visible')
                    .and('have.attr', 'for', 'gameId')
                    .and('have.text', 'Game ID');
                });
                
            // verify game id input field
            it('check that the Game ID field is visible and has the correct attributes', () => {
                cy.get('input#gameId', { timeout: extendedTimeout })
                .should('be.visible')
                .and('have.attr', 'placeholder', 'Enter game ID')
                .and('have.attr', 'name', 'gameId')
                .and('have.attr', 'readonly');
            });

            // verify game id input field value is correct
            it('check that the Game ID input field has the expected value', () => {
                cy.get('input#gameId', { timeout: extendedTimeout })
                  .should('have.value', `${roomId}`);
            });
        });
            
        
        describe('test username input field', () => {
            // verify user name label
            it('check that the username field has a label', () => {
                cy.get('input#userName', { timeout: extendedTimeout })
                  .closest('div')
                  .find('label')
                  .should('be.visible')
                  .and('have.attr', 'for', 'userName')
                  .and('have.text', 'Username');
            });
                
            // verify user name input field
            it('check that the user name field is visible and has the correct attributes', () => {
                cy.get('input#userName', { timeout: extendedTimeout })
                    .should('be.visible')
                    .and('have.attr', 'placeholder', 'Enter username')
                    .and('have.attr', 'name', 'userName')
                    .and('not.have.attr', 'readonly');
            });

            // verify that the value is the same as the value entered by the user
            it('check that the user name input field has the expected value', () => {
                cy.get('input#userName', { timeout: extendedTimeout })
                    .type('lynnbee')
                    .should('have.value', 'lynnbee');
            });
        });

        describe('test that there is a section with avatars', () => {
            // verify avatar label
            it('check that the avatar section has a label', () => {
                cy.get('label', { timeout: extendedTimeout })
                  .eq(2)
                  .should('be.visible')
                  .should('have.text','Select Avatar');
            });


            // verify the previous navigation button for the avatars
            describe('test that the avatar section has a previous navigation button', () => {
                it('check that the button is visible and disabled initially', () => {
                    cy.get('button', { timeout: extendedTimeout })
                      .should('be.visible')
                      .should('be.disabled');
                    });
                    
                it('check that the previous button has the correct image source', () => {
                    cy.get('button', { timeout: extendedTimeout })
                      .find('img')
                      .eq(0)
                      .should('have.attr', 'src', '/assets/icons/arrow-left-disabled.svg')
                      .and('have.attr', 'alt', 'previous button');
                });
            });
            

            // verify the next navigation button for the avatars
            describe('test that the avatar section has a next navigation button', () => {
                it('check that the next nutton is visible, and not disabled', () => {
                    cy.get('button', { timeout: extendedTimeout })
                        .should('be.visible')
                        .should('be.disabled');
                });
                
                it('check that the next button has the correct image source', () => {
                    cy.get('button', { timeout: extendedTimeout })
                        .find('img')
                        .eq(1)
                        .should('have.attr', 'src', '/assets/icons/arrow-right.svg')
                        .should('have.attr', 'alt', 'next button');
                });
            });       







        });
    });
});



