describe('Teste de API', () => {
  // Testa a resposta de um GET para a lista de produtos
  it('Verificar um GET', () => {
    cy.request('GET', 'https://automationexercise.com/api/productsList')
      .then((response) => {
        expect(response.status).to.equal(200);
      });
  });

  // Testa a resposta de um GET para a lista de todas as marcas
  it('Verificar a API de lista de todas as marcas', () => {
      cy.request('GET', 'https://automationexercise.com/api/brandsList')
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).contains('brands');
      });
  });
});

