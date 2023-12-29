Feature: Agendamento de Viagem

    Scenario Outline: Agendamento de viagem para um usuario com sucesso
    Given que realizamos o agendamento de uma viagem para um novo usuario no sistema
    When realizamos a chamada da API de agendamento com o usuario gerado
    Then o response 'endPointAgendamentoViagem/responses/responseViagemAgendada.json' deve ter o status code 200
    And o response 'endPointAgendamentoViagem/responses/responseViagemAgendada.json' deve conter a mensagem '"statusText":"OK"'


    Scenario Outline: Agendamento de viagem para um usuario invalido
    Given que realizamos o agendamento de uma viagem para um novo usuario no sistema com o nome invalido
    When realizamos a chamada da API de agendamento com o usuario gerado
    Then o response 'endPointAgendamentoViagem/responses/responseViagemAgendada.json' deve ter o status code 500
    And o response 'endPointAgendamentoViagem/responses/responseViagemAgendada.json' deve conter a mensagem 'Internal Server Error'