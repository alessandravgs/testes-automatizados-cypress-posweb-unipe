// registro.cy.js
describe("Registro de usuário", () => {
  // Realiza o cadastro de um novo usuário
  it("Realizar o cadastro", () => {
      cy.visit("http://automationexercise.com");
      cy.contains("Signup / Login").click();
      cy.contains("New User Signup!");
      cy.get('[data-qa="signup-name"]').type("Francisco");
      cy.get('[data-qa="signup-email"]').type("facajx@gmail.com");
      cy.get('button[data-qa="signup-button"]').click();
      cy.get('input[type="radio"][value="Mr"]').check();
      cy.get('input[data-qa="password"]').type("UniPE2023");
      cy.get('input[data-qa="first_name"]').type("Francisco");
      cy.get('input[data-qa="last_name"]').type("Assis");
      cy.get('input[data-qa="company"]').type("Unipê");
      cy.get('input[data-qa="address"]').type("Rua Tal");
      cy.get('input[data-qa="address2"]').type("Endereco tal");
      cy.get('select[data-qa="country"]').select("Canada");
      cy.get('input[data-qa="state"]').type("Paraíba");
      cy.get('input[data-qa="city"]').type("João Pessoa");
      cy.get('input[data-qa="zipcode"]').type("12345");
      cy.get('input[data-qa="mobile_number"]').type("1234567890");
      cy.contains("Create Account").click();
      cy.contains("Account Created!").should("exist");
      cy.get('a[data-qa="continue-button"]').click();
      cy.contains("Logged in as Francisco").should("exist");
  });

  // Realiza o login com sucesso
  it("deve realizar o login com sucesso", () => {
      cy.visit("http://automationexercise.com");
      cy.contains("Signup / Login").click();
      cy.get('input[data-qa="login-email"]').type("facajx@gmail.com");
      cy.get('input[data-qa="login-password"]').type("UniPE2023");
      cy.get('button[data-qa="login-button"]').click();
      cy.get('a[href="/logout"]').contains('Logout').click();
  });

  // Verifica erro ao tentar login com senha errada
  it("deve dar erro ao tentar login com senha errada", () => {
      cy.visit("http://automationexercise.com");
      cy.contains("Signup / Login").click();
      cy.get('input[data-qa="login-email"]').type("facajx@gmail.com");
      cy.get('input[data-qa="login-password"]').type("SenhaErrada3");
      cy.get('button[data-qa="login-button"]').click();
      cy.get('p[style="color: red;"]').contains('Your email or password is incorrect!').should('exist');
  });

  // Faz login e deleta a conta
  it("Fazer login e deletar a conta", () => {
      cy.visit("http://automationexercise.com");
      cy.contains("Signup / Login").click();
      cy.get('input[data-qa="login-email"]').type("facajx@gmail.com");
      cy.get('input[data-qa="login-password"]').type("UniPE2023");
      cy.get('button[data-qa="login-button"]').click();
      cy.get('a[href="/delete_account"]').click();
      cy.get('a[data-qa="continue-button"]').click();
  });
});