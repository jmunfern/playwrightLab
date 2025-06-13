export default class CheckoutPage {
    private Elements = {
        checkoutBtn: "//button[@id='checkout']",
        firstNameInput: "//input[@id='first-name']",
        lastNameInput: "//input[@id='last-name']",
        postalCodeInput: "//input[@id='postal-code']",
        continueBtn: "//input[@id='continue']",
        finishBtn: "//button[@id='finish']",
        successMessage: "//div[@id='checkout_complete_container']"
    }

    async startCheckout() {
        await global.page.click(this.Elements.checkoutBtn);
        await global.page.waitForSelector(this.Elements.firstNameInput);
    }

    async fillShippingInfo(firstName: string, lastName: string, postalCode: string) {
        await global.page.locator(this.Elements.firstNameInput).focus();
        await global.page.fill(this.Elements.firstNameInput, firstName);

        await global.page.locator(this.Elements.lastNameInput).focus();
        await global.page.fill(this.Elements.lastNameInput, lastName);

        await global.page.locator(this.Elements.postalCodeInput).focus();
        await global.page.fill(this.Elements.postalCodeInput, postalCode);

        await global.page.click(this.Elements.continueBtn);
    }

    async finishCheckout() {
        await global.page.click(this.Elements.finishBtn);
    }

    async verifySuccessMessage() {
        const message = global.page.locator(this.Elements.successMessage);
        await message.waitFor({ state: "visible" });
        const text = await message.textContent();
        if (!text?.includes("Thank you for your order")) {
            throw new Error("No se encontró el mensaje de confirmación de compra exitosa");
        }
    }
}
