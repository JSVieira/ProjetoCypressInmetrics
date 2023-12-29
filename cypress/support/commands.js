
Cypress.Commands.add('gerarNomeAleatorio', () => {
    cy.readFile('cypress/fixtures/endPointAgendamentoViagem/requests/listaDeNomes.json').then((jsonListaNomes) => {
        const listaNomes = jsonListaNomes.nomes;
        const posicaoNomeComPonto = Math.random() * listaNomes.length;
        const posicaoNomeSemPonto = Math.floor(posicaoNomeComPonto);

        return listaNomes[posicaoNomeSemPonto];
    });
});

Cypress.Commands.add('gerarSobrenomeAleatorio', () => {
    cy.readFile('cypress/fixtures/endPointAgendamentoViagem/requests/listaDeSobrenomes.json').then((jsonListaSobrenomes) => {
        const listaSobrenomes = jsonListaSobrenomes.sobrenomes;
        const posicaoSobrenomeComPonto = Math.random() * listaSobrenomes.length;
        const posicaoSobrenomeSemPonto = Math.floor(posicaoSobrenomeComPonto);

        return listaSobrenomes[posicaoSobrenomeSemPonto];
    });
});