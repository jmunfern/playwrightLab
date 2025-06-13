import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pages/iniciarSesionValidoPage";
import ProductsPage from "../pages/agregarProductoCarritoComprasPage";

const loginPage = new LoginPage();
const productsPage = new ProductsPage();

Given('que el usuario ha iniciado sesión con credenciales válidas', async () => {
    await loginPage.navigateToOrangePage();
    await loginPage.login("standard_user", "secret_sauce");
    await global.page.waitForSelector("//span[text()='Products']");
});

When('agrega un producto al carrito desde la lista de productos', async () => {
    await productsPage.addFirstProductToCart();
    await global.page.waitForTimeout(2000);
});

Then('el ícono del carrito debería mostrar 1 producto', async () => {
    await productsPage.verifyCartCount(1);
});
