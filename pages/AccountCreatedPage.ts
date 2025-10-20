import { Page, expect } from "@playwright/test";

export class AccountCreatedPage {
    readonly page: Page;
    readonly accountCreatedMessage;
    readonly continueButton;

    constructor(page: Page) {
        this.page = page;
        this.accountCreatedMessage = page.locator('h2[data-qa="account-created"]');
        this.continueButton = page.locator('a[data-qa="continue-button"]');
    }

    async verifyAccountCreated() {
        await expect(this.accountCreatedMessage).toBeVisible();
        //await this.accountCreatedMessage.waitFor({ state: 'visible' });
    }

    async continueToHome() {
        await this.continueButton.click();
    }

}