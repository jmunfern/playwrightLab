import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pages/iniciarSesionValidoPage";
import ProductsPage from "../pages/agregarProductoCarritoComprasPage";
import CartPage from "../pages/verProductoCarritoPage";

const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();

Given('que el usuario ha agregado productos al carrito', async () => {
    await loginPage.navigateToOrangePage();
    await loginPage.login("standard_user", "secret_sauce");
    await productsPage.addFirstProductToCart();
});

When('navega al carrito de compras', async () => {
    await cartPage.goToCart();
});

Then('debería ver los productos previamente agregados', async () => {
    await cartPage.verifyProductInCart();
});
