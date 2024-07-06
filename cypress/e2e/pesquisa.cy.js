describe("Teste Cypress - Pesquisa de Produtos", () => {
  // Pesquisa por um produto existente e verifica se ele está visível
  it("Pesquisa por um produto existente", () => {
      cy.visit("http://automationexercise.com/products");
      cy.contains('All Products').should('be.visible');
      cy.get('#search_product').type('TShirt');
      cy.get('#submit_search').click();
      cy.contains("Searched Products").should('be.visible');
      cy.contains('p', 'shirt', { matchCase: false }).should('be.visible');
  });

  // Pesquisa por um produto inexistente e verifica se a mensagem de produto não encontrado está visível
  it("Pesquisa por um produto inexistente", () => {
      cy.visit("http://automationexercise.com/products");
      cy.contains('All Products').should('be.visible');
      cy.get('#search_product').type('QualquerCoisaQueEuSeiQueNaoExiste');
      cy.get('#submit_search').click();
      cy.contains("Searched Products").should('be.visible');
      cy.contains("View Product").should('not.exist');
  });
});