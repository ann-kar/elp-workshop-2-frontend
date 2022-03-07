describe("form works correctly", () => {
    it("correctly handles the values of the input fields (LAT and LON) upon input", () => {
        websiteIsOpened();
        cy.get('input#lat').should('be.empty');
        cy.get('input#lon').should('be.empty');
        cy.get('input#lat').type('34').should('have.value', '34');
        cy.get('input#lon').type('30').should('have.value', '30');
    })

    it("correctly handles the values of radio buttons", () => {
        websiteIsOpened();
        cy.get('input[type="radio"]').first().should('be.checked');
        cy.get('input[type="radio"][value="visual"]').check({ force: true });
        cy.get('input[value="openweather"]').should('not.be.checked');
        cy.get('input[value="visual"]').should('be.checked');
    })

    it("validates inputs on submit", () => {
        websiteIsOpened();
        cy.get('input#lat').type('233')
        cy.get('input#lon').type('242')
        cy.get('input[type="radio"][value="visual"]').check({ force: true });
        cy.get('button#submit').click();
        cy.get('div.message.submit-message').contains('Please fill correctly all the fields.');
    })
});
