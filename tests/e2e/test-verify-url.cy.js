describe('Remote Bingo Homepage', () => {
    const baseUrl = 'https://staging.remote.bingo';
    const extendedTimeout = 10000; // 10 seconds timeout
  
    beforeEach(() => {
      // visit the base URL before each test
      cy.visit(`${baseUrl}`, { timeout: extendedTimeout });
    });

    describe('check that the site is functional', () => {
        
        // verify that the server is up and running
        it('check the Remote Bingo URL', () => {
            cy.request(baseUrl)
              .then((response) => {
                expect(response.status).to.eq(200);
            });
        });

    });

});
