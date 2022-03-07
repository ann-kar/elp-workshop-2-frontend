import { websiteIsOpened } from "./initialDisplay";

describe("fetched weather data is displayed correctly in the app", () => {

    it("correctly displays fetched weather data from Visual API", () => {

        const lat = '30';
        const lon = '34';

        submitData(lat, lon);

        const staticResponse = {
            temperature: 24.3,
            pressure: 1011,
            humidity: 20
        }

        cy.intercept(`/https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${lon}?unitGroup=metric&include=current&key=${process.env.REACT_APP_VISUAL_KEY}&contentType=json`, staticResponse)

        displaysTemperature(staticResponse.temperature);
        displaysPressure(staticResponse.pressure);
        displaysHumidity(staticResponse.humidity);
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