// cypress/e2e/Remote_bingo/blog_page.cy.js

describe('Blog API Test', () => {
  const baseUrl = 'https://api.staging.remote.bingo'; 
  const apiUrl = `${baseUrl}/api/v1/blogs`;
  const extendedTimeout = 10000; // 10 seconds timeout

  beforeEach(() => {
    // Verify that the endpoint is functional
    cy.visit(`${baseUrl}/api/v1/blogs`, { timeout: extendedTimeout });
  });

  it('should fetch blog data', () => {
    cy.request(apiUrl).should((response) => {
      // assert that the status code is 200 (OK)
      expect(response.status).to.eq(200);
      // assert that the response body is not empty
      expect(response.body).to.not.be.empty;
      // log the response body
      cy.log(JSON.stringify(response.body, null, 2));
    });
  });
});
  