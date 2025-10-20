import {expect, Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly nameInput;
    readonly emailInput;
    readonly submitButton;
    readonly signupPageTitle;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator('input[data-qa="signup-name"]');
        this.emailInput = page.locator('input[data-qa="signup-email"]');
        this.submitButton = page.locator('button[data-qa="signup-button"]');
        this.signupPageTitle = page.locator('.signup-form > h2');
    }

    async fillInitialData(username: string, password: string) {
        await this.nameInput.fill(username);
        await this.emailInput.fill(password);
    }

    async submitSignup() {
        await this.submitButton.click();
    }

    async verifySignupPageVisible() {
        await expect(this.signupPageTitle).toBeVisible();
    }
}
