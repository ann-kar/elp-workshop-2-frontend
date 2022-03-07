import { websiteIsOpened } from "./initialDisplay";

describe("correctly fetches and displays weather data", () => {

    it("fetches weather data from Visual API", () => {
        const lat = '30';
        const lon = '34';

        cy.intercept(
            {
                method: 'GET',
                url: `https://weather.visualcrossing.com/**`,
            },
            [{ fixture: 'visualCrossing.json' }]
        ).as('getAPIData')

        submitData(lat, lon);
        cy.wait('@getAPIData');

    })

    it("fetches weather data from Open Weather API", () => {


        cy.intercept(
            {
                method: 'GET',
                url: `https://api.openweathermap.org/**`,
            },
            [{ fixture: 'visualCrossing.json' }]
        ).as('getOpenAPIData')
        websiteIsOpened();
        cy.get('input#lat').type('30');
        cy.get('input#lon').type('34');
        cy.get('button#submit').click();
        cy.wait('@getOpenAPIData');

    })

    it("correctly displays weather data", () => {
        const lat = '30';
        const lon = '34';

        submitData(lat, lon);

        cy.intercept(
            {
                method: 'GET',
                url: `https://weather.visualcrossing.com/**`,
            },
            [{ fixture: 'visualCrossing.json' }]
        ).as('getAPIData')

        cy.get('#pressure').should('be.visible');
        cy.get('#pressure').should('not.be.empty');
        cy.get('#temperature').should('be.visible');
        cy.get('#temperature').should('not.be.empty');
        cy.get('#humidity').should('be.visible');
        cy.get('#humidity').should('not.be.empty');
    })
});

function submitData(lat: string, lon: string) {

    websiteIsOpened();
    cy.get('input#lat').type(lat)
    cy.get('input#lon').type(lon)
    cy.get('input[type="radio"][value="visual"]').check({ force: true });
    cy.get('button#submit').click();
}

function displaysTemperature(result: number) {
    cy.get("#temperature").contains(result);
}

function displaysPressure(result: number) {
    cy.get("#pressure").contains(result);
}

function displaysHumidity(result: number) {
    cy.get("#humidity").contains(result);
}