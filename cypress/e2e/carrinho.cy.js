describe("Carrinho de compras", () => {
    // Adiciona produtos ao carrinho e verifica se eles estão visíveis
    it("Adicionar produtos ao carrinho", () => {
        cy.visit("https://automationexercise.com/product_details/1");
        cy.contains('button', 'Add to cart').click();
        cy.visit("https://automationexercise.com/product_details/2");
        cy.contains('button', 'Add to cart').click();
        cy.visit("https://automationexercise.com/product_details/3");
        cy.contains('button', 'Add to cart').click();
        cy.visit('https://automationexercise.com/view_cart');
        cy.contains('p', 'shirt', { matchCase: false }).should('be.visible');
    });

    // Remove um produto do carrinho
    it("Remover um produto do carrinho", () => {
        cy.visit("http://automationexercise.com/products");
        cy.get('a[data-product-id="1"]').click();
    });
});