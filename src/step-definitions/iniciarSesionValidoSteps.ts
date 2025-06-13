import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pages/iniciarSesionValidoPage";

const loginPage = new LoginPage();

// Definición de pasos para el escenario de inicio de sesión válido
Given('que el usuario navega hacia la página de inicio de sesión de Sauce Demo', async () => {
    await loginPage.navigateToOrangePage();
    await global.page.waitForTimeout(3000); // Espera 3 segundos
});

When('ingresa el nombre de usuario {string} y la contraseña {string}', async (user, password) => {
    await loginPage.login(user, password);
     await global.page.waitForTimeout(3000); // Espera 3 segundos
});

Then('debería ser redirigido a la página de productos', async () => {
    await global.page.waitForSelector("//span[text()='Products']");
    await global.page.waitForTimeout(3000); // Espera 3 segundos
});