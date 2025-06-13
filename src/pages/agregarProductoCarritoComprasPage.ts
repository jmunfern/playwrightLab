export default class ProductsPage {
    private Elements = {
        firstAddToCartBtn: "//button[@id='add-to-cart-sauce-labs-backpack']",
        cartBadge: "//a[@class='shopping_cart_link']"
    }

    async addFirstProductToCart() {
        const addToCartBtn = global.page.locator(this.Elements.firstAddToCartBtn);
        await addToCartBtn.click();
    }

    async verifyCartCount(expectedCount: number) {
        const cartBadge = global.page.locator(this.Elements.cartBadge);
        await cartBadge.waitFor({ state: "visible" });
        const countText = await cartBadge.textContent();
        if (parseInt(countText || "0") !== expectedCount) {
            throw new Error(`Se esperaba ${expectedCount} producto(s) en el carrito, pero se encontró ${countText}`);
        }
    }
}
