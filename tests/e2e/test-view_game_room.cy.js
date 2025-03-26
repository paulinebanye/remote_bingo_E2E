// cypress/e2e/view-game-rooms.cy.js

describe('View Game Rooms in Bingo', () => {
    const baseUrl = 'https://staging.remote.bingo';
    const extendedTimeout = 10000; // 10 seconds timeout
  
    beforeEach(() => {
      // visit the base URL before each test
      cy.visit(`${baseUrl}`, { timeout: extendedTimeout });
    });
    
    it('should navigate to the Game Rooms page', () => {
      cy.get('a[href="/game-rooms"]').click();  
  
      // verify that the Game Rooms page loaded successfully
      cy.url().should('include', '/game-rooms');  
      cy.get('h1').should('contain', 'Game Rooms');  
    });
  
    it('should display the list of game rooms', () => {
      // verify that the game rooms list is visible
      cy.get('.game-room-list').should('be.visible');  
  
      // verify that at least one game room is displayed
      cy.get('.game-room-item').should('have.length.greaterThan', 0);  
  
      // verify details about the game rooms
      cy.get('.game-room-item').first().within(() => {
        cy.get('.room-name').should('contain', 'Room Name');  
        cy.get('.room-status').should('be.visible');  
      });
    });
  });
  