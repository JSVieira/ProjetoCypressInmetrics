import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then('o response {string} deve ter o status code {int}', (caminhoENomeJson, statusCode) => {
    cy.readFile('cypress/fixtures/' + caminhoENomeJson).then((responseJson) => {
        expect(responseJson.status).to.equal(statusCode, 'status code do response é igual ao status code esperado');
    });
});

Then('o response {string} deve conter a mensagem {string}', (caminhoENomeJson, mensagem) => {
    cy.readFile('cypress/fixtures/' + caminhoENomeJson).then((responseJson) => {
        expect(JSON.stringify(responseJson)).contains(mensagem, 'response contem a mensagem passada');
    });
});