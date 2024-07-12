describe('Finalização da Compra', () => {
    it('Finalizar a compra de um produto com sucesso', () => {
        // Acessar o site
        cy.visit('https://automationexercise.com/')

        // Ir para a página de login
        cy.get('a[href="/login"]').first().click()

        // Preencher email e senha com um login criado para o teste
        cy.get('input[data-qa="login-email"]').type('posunipe@email.com')
        cy.get('input[data-qa="login-password"]').type('123')
        cy.get('button[data-qa="login-button"]').click()

        // Voltar à tela inicial
        cy.visit('https://automationexercise.com/')

        // Entrar na aba do produto
        cy.get('a[href="/product_details/1"]').click()

        // Adicionar o produto ao carrinho
        cy.get('button[class="btn btn-default cart"]').click()
        cy.get('button[class="btn btn-success close-modal btn-block"]').click()

        // Ir para o carrinho de compras
        cy.get('a[href="/view_cart"]').first().click()

        // Fazer o check out da compra
        cy.get('a[class="btn btn-default check_out"]').click()

        // Confirmar a ordem
        cy.get('a[href="/payment"]').click()

        // Preencher as informações de pagamento
        cy.get('input[name="name_on_card"]').type('Pos Unipe Teste')
        cy.get('input[name="card_number"]').type('1234 5678 9123 4567')
        cy.get('input[name="cvc"]').type('123')
        cy.get('input[name="expiry_month"]').type('12')
        cy.get('input[name="expiry_year"]').type('2055')

        // Confirmar a finalização da compra
        cy.get('button[data-qa="pay-button"]').click()

        // Verificar a confirmação da compra
        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')
  
    })
  })
  

  describe('Finalização da Compra', () => {
    it('Finalizar a compra de um produto com sucesso e baixar a fatura', () => {
        // Acessar o site
        cy.visit('https://automationexercise.com/')

        // Ir para a página de login
        cy.get('a[href="/login"]').first().click()

        // Preencher email e senha com um login criado para o teste
        cy.get('input[data-qa="login-email"]').type('posunipe@email.com')
        cy.get('input[data-qa="login-password"]').type('123')
        cy.get('button[data-qa="login-button"]').click()

        // Voltar à tela inicial
        cy.visit('https://automationexercise.com/')

        // Entrar na aba do produto
        cy.get('a[href="/product_details/1"]').click()

        // Adicionar o produto ao carrinho
        cy.get('button[class="btn btn-default cart"]').click()
        cy.get('button[class="btn btn-success close-modal btn-block"]').click()

        // Ir para o carrinho de compras
        cy.get('a[href="/view_cart"]').first().click()

        // Fazer o check out da compra
        cy.get('a[class="btn btn-default check_out"]').click()

        // Confirmar a ordem
        cy.get('a[href="/payment"]').click()

        // Preencher as informações de pagamento
        cy.get('input[name="name_on_card"]').type('Pos unipe Teste')
        cy.get('input[name="card_number"]').type('1234 5678 9123 4567')
        cy.get('input[name="cvc"]').type('123')
        cy.get('input[name="expiry_month"]').type('12')
        cy.get('input[name="expiry_year"]').type('2056')

        // Confirmar a finalização da compra
        cy.get('button[data-qa="pay-button"]').click()

        // Verificar a confirmação da compra
        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')
  
        // Aguardar o link de baixar a fatura aparecer e clicar
        cy.get('a[href="/download_invoice/500"]', { timeout: 1000 }).click()

        // Verificar se o arquivo foi baixado
        const downloadsFolder = Cypress.config('downloadsFolder')
        cy.readFile(`${downloadsFolder}/invoice.txt`).should('exist')
    })
  })
  
  describe('Finalização da Compra sem dados de pagamento', () => {
    it('Tentar finalizar a compra sem os dados do cartão', () => {
        // Acessar o site
        cy.visit('https://automationexercise.com/')

        // Ir para a página de login
        cy.get('a[href="/login"]').first().click()

        // Preencher email e senha com um login criado para o teste
        cy.get('input[data-qa="login-email"]').type('posunipe@email.com')
        cy.get('input[data-qa="login-password"]').type('123')
        cy.get('button[data-qa="login-button"]').click()

        // Voltar à tela inicial
        cy.visit('https://automationexercise.com/')

        // Entrar na aba do produto
        cy.get('a[href="/product_details/1"]').click()

        // Adicionar o produto ao carrinho
        cy.get('button[class="btn btn-default cart"]').click()
        cy.get('button[class="btn btn-success close-modal btn-block"]').click()

        // Ir para o carrinho de compras
        cy.get('a[href="/view_cart"]').first().click()

        // Fazer o check out da compra
        cy.get('a[class="btn btn-default check_out"]').click()

        // Confirmar a ordem
        cy.get('a[href="/payment"]').click()

        // Deixar os campos de pagamento em branco e tentar confirmar a finalização da compra
        cy.get('button[data-qa="pay-button"]').click()

        // Verificar se uma mensagem de erro é exibida solicitando o preenchimento dos campos de pagamento
        cy.get('input[name="name_on_card"]').then(($input) => {
            expect($input[0].validationMessage).to.eq('Preencha este campo.')
          })
    })
  })
  