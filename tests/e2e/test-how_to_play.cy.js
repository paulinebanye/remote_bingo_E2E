
describe('Remote Bingo How to play Page', () => {
  const baseUrl = 'https://staging.remote.bingo';
  const extendedTimeout = 10000; // 10 seconds timeout
  
  beforeEach(() => {
    // visit the how to play page before each test
    cy.visit(`${baseUrl}/how-to-play`, { timeout: extendedTimeout }); 
  });

  it('should display How to play button', () => {
    // Verify the how to play are  visible and functional
    cy.get('button', { timeout: extendedTimeout })
      .contains('Numbers')
      .should('be.visible')
      .click();
    cy.get('button', { timeout: extendedTimeout })
      .contains('Alphabets')
      .should('be.visible')
      .click();
  });

  it('should display How to Play header', () => {
    cy.get('h1.text-primary-900.font-bold.text-4xl')
      .should('be.visible')
      .and('contain.text', 'How To Play');
  })

  it('should display the numbers and alphabets buttons', () => {  
    cy.get('button', { timeout: extendedTimeout })
      .contains('Numbers')
      .should('be.visible')
      .click();
    
    cy.get('button', { timeout: extendedTimeout })
      .contains('Alphabets')
      .should('be.visible')
      .click();
  });

  it('should display all the content elements',()=>{
    cy.get('article.mt-10').should('be.visible')
  })

  it('should interact with the displayed contents', () => {  
    cy.get('.space-y-3')
      .should('be.visible')
  })
});
