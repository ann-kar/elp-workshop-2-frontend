
describe("initial display of HTML structure and data", () => {
  it("displays two input fields: LAT and LON", () => {
    websiteIsOpened();
    cy.get('input#lat').should('exist');
    cy.get('input#lon').should('exist');
  })

  it("displays two sources of API data to choose from: OpenWeather and VisualCrossing", () => {
    websiteIsOpened();
    cy.get('input[name="api"][value="openweather"]').should('exist');
    cy.get('input[name="api"][value="visual"]').should('exist');
  })

  it("displays a submit button", () => {
    websiteIsOpened();
    cy.get('button#submit').should('exist');
  })

  it("does not display weather data before submit", () => {
    websiteIsOpened();
    cy.get('div#temperature').should('not.exist');
    cy.get('div#humidity').should('not.exist');
    cy.get('div#pressure').should('not.exist');
  });
});

function websiteIsOpened() {
  cy.visit("http://localhost:3000");
}
