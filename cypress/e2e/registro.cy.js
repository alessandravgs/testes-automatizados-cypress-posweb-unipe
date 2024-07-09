// registro.cy.js
describe("Registro de usuário", () => {
    // Antes de cada teste, limpa cookies e armazenamento local e visita a página inicial
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit("http://automationexercise.com");
    });

    // Realiza o cadastro de um novo usuário
    it("Realizar o cadastro", () => {
        cy.contains("Signup / Login").click();
        cy.contains("New User Signup!");
        cy.get('[data-qa="signup-name"]').type("Kleber");
        cy.get('[data-qa="signup-email"]').type("kleber@gmail.com");
        cy.get('button[data-qa="signup-button"]').click();

        // Verifica se a mensagem de e-mail já existe é exibida
        cy.get('body').then((body) => {
            if (body.find('p:contains("Email Address already exist!")').length > 0) {
                // Se a mensagem de e-mail já existe for encontrada, pular para o login
                cy.log('Email already exists, proceeding to login test.');
                cy.contains("Signup / Login").click();
                cy.get('input[data-qa="login-email"]').type("kleber@gmail.com");
                cy.get('input[data-qa="login-password"]').type("Unipe2024");
                cy.get('button[data-qa="login-button"]').click();
                cy.get('a[href="/logout"]').contains('Logout').click();
            } else {
                // Se a mensagem de e-mail não existir, continuar com o registro
                cy.get('input[type="radio"][value="Mr"]').should('be.visible').check();
                cy.get('input[data-qa="password"]').type("Unipe2024");
                cy.get('input[data-qa="first_name"]').type("Kleber");
                cy.get('input[data-qa="last_name"]').type("Barros");
                cy.get('input[data-qa="company"]').type("Unipê");
                cy.get('input[data-qa="address"]').type("Rua Tal");
                cy.get('input[data-qa="address2"]').type("Endereco tal");
                cy.get('select[data-qa="country"]').select("India");
                cy.get('input[data-qa="state"]').type("Paraíba");
                cy.get('input[data-qa="city"]').type("João Pessoa");
                cy.get('input[data-qa="zipcode"]').type("58081320");
                cy.get('input[data-qa="mobile_number"]').type("83999999999");
                cy.contains("Create Account").click();
                cy.contains("Account Created!").should("exist");
                cy.get('a[data-qa="continue-button"]').click();
                cy.contains("Logged in as Kleber").should("exist");
            }
        });
    });

    // Realiza o login com sucesso
    it("deve realizar o login com sucesso", () => {
        cy.contains("Signup / Login").click();
        cy.get('input[data-qa="login-email"]').type("kleber@gmail.com");
        cy.get('input[data-qa="login-password"]').type("Unipe2024");
        cy.get('button[data-qa="login-button"]').click();
        cy.get('a[href="/logout"]').contains('Logout').click();
    });

  // Verifica erro ao tentar login com senha errada
  it("deve dar erro ao tentar login com senha errada", () => {
      cy.visit("http://automationexercise.com");
      cy.contains("Signup / Login").click();
      cy.get('input[data-qa="login-email"]').type("kleber@gmail.com");
      cy.get('input[data-qa="login-password"]').type("SenhaErrada");
      cy.get('button[data-qa="login-button"]').click();
      cy.get('p[style="color: red;"]').contains('Your email or password is incorrect!').should('exist');
  });

  // Faz login e deleta a conta
  it("Fazer login e deletar a conta", () => {
      cy.visit("http://automationexercise.com");
      cy.contains("Signup / Login").click();
      cy.get('input[data-qa="login-email"]').type("kleber@gmail.com");
      cy.get('input[data-qa="login-password"]').type("Unipe2024");
      cy.get('button[data-qa="login-button"]').click();
      cy.get('a[href="/delete_account"]').click();
      cy.get('a[data-qa="continue-button"]').click();
  });
});