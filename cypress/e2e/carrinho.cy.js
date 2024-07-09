describe("Teste do Carrinho de Compras", () => {
    // Antes de cada teste, adicionar produtos ao carrinho
    beforeEach(() => {
        // Visita a página do produto 1 e adiciona ao carrinho
        cy.visit("https://automationexercise.com/product_details/1");
        cy.contains('button', 'Add to cart').click();
        
        // Visita a página do produto 2 e adiciona ao carrinho
        cy.visit("https://automationexercise.com/product_details/2");
        cy.contains('button', 'Add to cart').click();
        
        // Visita a página do produto 3 e adiciona ao carrinho
        cy.visit("https://automationexercise.com/product_details/3");
        cy.contains('button', 'Add to cart').click();
    });

    // Teste para verificar se os produtos foram adicionados ao carrinho
    it("Adicionar produtos ao carrinho", () => {
        // Visita a página do carrinho
        cy.visit('https://automationexercise.com/view_cart');
        
        // Verifica se um dos produtos (com texto 'shirt') está visível no carrinho
        cy.contains('p', 'shirt', { matchCase: false }).should('be.visible');
    });

    // Teste para remover um produto do carrinho
    it("Remover um produto do carrinho", () => {
        // Visita a página do carrinho
        cy.visit('https://automationexercise.com/view_cart');
        
        // Clica no link para remover o produto com data-product-id="1"
        cy.get('a[data-product-id="1"]').click();
        
        // Verifica se o produto (com texto 'shirt') foi removido do carrinho
        cy.contains('p', 'shirt', { matchCase: false }).should('not.exist');
    });
});
