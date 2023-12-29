import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RestRequests from "../../support/RestRequests.js" //Importando a classe do caminho do arquivo anterior

const classeRestRequestsInstanciada = new RestRequests(); //Instanciando a classe dentro de uma variavel
const urlAgendamentoViagem = "https://restful-booker.herokuapp.com/booking";
const caminhoResponseViagemAgendada = "cypress/fixtures/endPointAgendamentoViagem/responses/responseViagemAgendada.json";

Given("que realizamos o agendamento de uma viagem para um novo usuario no sistema", function () {

    cy.gerarNomeAleatorio().then(nome => {
        cy.gerarSobrenomeAleatorio().then(sobrenome => {

            const jsonDaRequestAgendamentoViagem = {
                "firstname" : nome,
                "lastname" : sobrenome,
                "totalprice" : 1000,
                "depositpaid" : true,
                "bookingdates" : {
                "checkin" : "2024-02-01",
                "checkout" : "2024-03-01"
                },
                "additionalneeds" : "Café da manhã"
            }

            cy.writeFile('cypress/fixtures/endPointAgendamentoViagem/requests/jsonRequestlistaDeNomes.json', jsonDaRequestAgendamentoViagem)
        });
    });
});

Given("que realizamos o agendamento de uma viagem para um novo usuario no sistema com o nome invalido", function () {

        cy.gerarSobrenomeAleatorio().then(sobrenome => {

            const jsonDaRequestAgendamentoViagem = {
                "firstname" : 1234,
                "lastname" : sobrenome,
                "totalprice" : 1000,
                "depositpaid" : true,
                "bookingdates" : {
                "checkin" : "2024-02-01",
                "checkout" : "2024-03-01"
                },
                "additionalneeds" : "Café da manhã"
            }

            cy.writeFile('cypress/fixtures/endPointAgendamentoViagem/requests/jsonRequestlistaDeNomes.json', jsonDaRequestAgendamentoViagem)
        });
});

When("realizamos a chamada da API de agendamento com o usuario gerado", function () {
    cy.readFile('cypress/fixtures/endPointAgendamentoViagem/requests/jsonRequestlistaDeNomes.json').then((requestJsonAgendamentoViagem) => {
        const jsonEmformatoString = JSON.stringify(requestJsonAgendamentoViagem);
        classeRestRequestsInstanciada.requisicaoPostComJson(jsonEmformatoString, urlAgendamentoViagem).then(response => {
            cy.writeFile(caminhoResponseViagemAgendada, JSON.stringify(response));
        });
    });
});