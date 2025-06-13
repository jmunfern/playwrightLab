import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pages/iniciarSesionValidoPage";
import ProductsPage from "../pages/agregarProductoCarritoComprasPage";
import CartPage from "../pages/verProductoCarritoPage";
import CheckoutPage from "../pages/completarCompraPage";

const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

Given('que el usuario tiene productos en el carrito', async () => {
    await loginPage.navigateToOrangePage();
    await loginPage.login("standard_user", "secret_sauce");
    await productsPage.addFirstProductToCart();
    await cartPage.goToCart();
});

When('procede al checkout', async () => {
    await checkoutPage.startCheckout();
});

When('completa la información de envío', async () => {
    await checkoutPage.fillShippingInfo("Jorge", "Muñoz", "12345");
});

When('confirma la compra', async () => {
    await checkoutPage.finishCheckout();
});

Then('debería ver un mensaje de confirmación de compra exitosa', async () => {
    await checkoutPage.verifySuccessMessage();
});
