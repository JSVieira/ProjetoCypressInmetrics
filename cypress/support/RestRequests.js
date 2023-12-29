class RestRequests { //É feita a criação de uma classe

    requisicaoPostComJson(jsonBody, url) { //Criação de um metodo, qual realiza uma requisão do tipo post
        return cy.request({
            method: 'POST', //Tipo de metodo a ser utiizado na requisição, pode se do tipo "POST", "GET", "PUT" e "DELETE"
            headers: { //Headers passados para a API
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: jsonBody, //Body passado no request da API
            url: url, //Url da API a ser feita o request
            failOnStatusCode: false //Serve para o teste dar continuidade mesmo se o status code for diferente de 200 ou 201
        });
    } //Final do metodo 'fazerRequisicaoPostComJson'

    requisicaoGetAtributoUrl(id, url) {
        return cy.request({
            method: 'GET',
            url: url + '/' + id, //Url da API para ser feio o request
            failOnStatusCode: false //Serve para o teste dar continuidade mesmo se o status code for diferente de 200 ou 201
        });
    } //Final do metodo 'fazerRequisicaoPostComJson'
    
}
export default RestRequests //Necessário para ser vizualizada pelo restante das classes