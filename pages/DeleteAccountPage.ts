import { Page, expect } from "@playwright/test";

export class deleteAccountPage {
    readonly page: Page;
    readonly deleteAccountMessage;

    constructor(page: Page) {
        this.page = page;
        this.deleteAccountMessage = page.locator('h2[data-qa="account-deleted"]');
    }

    async verifyAccountDeleted() {
        await expect(this.deleteAccountMessage).toBeVisible();
    }
}