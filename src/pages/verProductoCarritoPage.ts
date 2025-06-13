export default class CartPage {
    private Elements = {
        cartIcon: "//a[@class='shopping_cart_link']",
        cartItem: "//div[@class='cart_item']"
    }

    async goToCart() {
        const cartIcon = global.page.locator(this.Elements.cartIcon);
        await cartIcon.click();
        await global.page.waitForSelector(this.Elements.cartItem);
    }

    async verifyProductInCart() {
        const cartItem = global.page.locator(this.Elements.cartItem);
        const count = await cartItem.count();
        if (count === 0) {
            throw new Error("No se encontraron productos en el carrito");
        }
    }
}
