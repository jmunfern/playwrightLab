import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pages/iniciarSesionValidoPage";

const loginPage = new LoginPage();

Given('que un usuario navega hacia la página de inicio de sesión de Sauce Demo', async () => {
    await loginPage.navigateToOrangePage();
    await global.page.waitForTimeout(3000); // Espera 3 segundos
});

When('ingreso el nombre de usuario {string} y la contraseña {string}', async (user, password) => {
    await loginPage.login(user, password);
     await global.page.waitForTimeout(3000); // Espera 3 segundos
});

Then('debería ver un mensaje de error indicando que las credenciales son incorrectas', async () => {
    await global.page.waitForSelector("//h3[contains(text(),'Epic sadface: Username and password do not match a')]");
    await global.page.waitForTimeout(3000); // Espera 3 segundos
});