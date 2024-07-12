
# Projeto de Testes Automatizados com Cypress

Este repositório contém um conjunto de testes automatizados utilizando Cypress para verificar a funcionalidade de uma aplicação web de comércio eletrônico. Os testes cobrem operações de API, carrinho de compras, pesquisa de produtos e fluxo de registro de usuário.

## Requisitos

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação

Siga os passos abaixo para configurar e executar os testes:

1. Clone o repositório:

    ```bash
    git clone https://github.com/kleberbarros9/testes-automatizados-cypress-posweb-unipe.git
    cd testes-automatizados-cypress-posweb-unipe
    ```

2. Inicialize um novo projeto npm:

    ```bash
    npm init -y
    ```

3. Instale o Cypress como uma dependência de desenvolvimento:

    ```bash
    npm install cypress --save-dev
    ```

4. Abra o Cypress pela primeira vez para criar as pastas padrão:

    ```bash
    npx cypress open
    ```

    Isso criará automaticamente a estrutura de pastas `cypress` com as subpastas `e2e`, `fixtures` e `support`.

5. Coloque os arquivos de teste `api.cy.js`, `carrinho.cy.js`, `pesquisa.cy.js` e `registro.cy.js` na subpasta `e2e`:

    ```
    cypress/
    ├── e2e/
    │   ├── api.cy.js
    │   ├── carrinho.cy.js
    │   ├── pesquisa.cy.js
    │   └── registro.cy.js
    ├── fixtures/
    ├── support/
    └── cypress.config.js
    ```

## Estrutura do Projeto

Após abrir o Cypress pela primeira vez, a estrutura de pastas do projeto deve ser similar à seguinte:

```
nome-do-repositorio/
├── cypress/
│   ├── e2e/
│   │   ├── api.cy.js
│   │   ├── carrinho.cy.js
│   │   ├── pesquisa.cy.js
│   │   └── registro.cy.js
│   ├── fixtures/
│   ├── support/
│   └── cypress.config.js
├── node_modules/
├── package.json
└── README.md
```

## Execução dos Testes

Para abrir a interface gráfica do Cypress e executar os testes, use o seguinte comando:

```bash
npx cypress open
```

Na interface que se abrirá, clique no arquivo de teste que deseja executar.

## Escopo dos Testes

### O que será executado durante os testes:

1. **Testes de API**:
   - Verificação do status de resposta ao realizar requisições GET para a lista de produtos.
   - Verificação do status de resposta ao realizar requisições GET para a lista de todas as marcas.

2. **Testes de Carrinho de Compras**:
   - Adição de múltiplos produtos ao carrinho e verificação da presença dos produtos no carrinho.
   - Remoção de um produto específico do carrinho e verificação da remoção.

3. **Testes de Pesquisa de Produtos**:
   - Pesquisa por produtos existentes e verificação da exibição dos resultados esperados.
   - Pesquisa por produtos inexistentes e verificação da ausência de resultados.

4. **Testes de Registro de Usuário e Autenticação**:
   - Cadastro de um novo usuário e verificação da criação da conta.
   - Login com um usuário existente e verificação do sucesso do login.
   - Tentativa de login com senha errada e verificação da mensagem de erro.
   - Login e subsequente exclusão da conta do usuário.

5. **Testes de Finalização de Compra**:
    - Finalizar a compra de um produto com sucesso
    - Finalizar a compra de um produto com sucesso e baixar a fatura
    - Tentar finalizar uma compra sem os dados de pagamento

### O que não será executado durante os testes:
- Testes de performance e carga para as APIs e a aplicação web.
- Testes de usabilidade e experiência do usuário.
- Testes de segurança como injeção de SQL, XSS e outras vulnerabilidades.
- Testes de compatibilidade em diferentes navegadores e dispositivos.
- Testes de fluxo de pagamento e transações financeiras.
- Testes relacionados a funcionalidades específicas não mencionadas (e.g., wish list, perfil do usuário).

## Estratégia de Testes

### Garantia de Cobertura
- **Seleção de Casos de Teste**: Os casos de teste selecionados cobrem as funcionalidades críticas da aplicação, como operações de carrinho de compras, pesquisa de produtos e fluxo de autenticação de usuário.
- **Automatização**: Todos os casos de teste serão automatizados utilizando Cypress, garantindo que as verificações sejam repetíveis e possam ser executadas frequentemente.

### Tempo
- **Execução de Testes Automatizados**: Testes automatizados serão executados a cada commit em um pipeline de Integração Contínua (CI) para garantir feedback rápido sobre a estabilidade do código.
- **Paralelismo**: Execução paralela de testes para otimizar o tempo de execução e reduzir o tempo total necessário para validação.

### Possíveis Contingências
- **Falhas de Teste**: Em caso de falha nos testes, um alerta será gerado e os logs serão analisados para identificar e corrigir rapidamente as causas.
- **Ambiente de Teste**: Manter um ambiente de teste estável e isolado para evitar interferências externas e inconsistências nos resultados dos testes.
- **Backup de Dados**: Garantir que há um backup dos dados usados durante os testes para restaurar o estado inicial em caso de falhas ou inconsistências.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
