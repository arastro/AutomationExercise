import { Page, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly signupButton
  readonly loggedInUserText;
  readonly deleteAccountButton;
  readonly homeLogo;

  constructor(page: Page) {
    this.page = page;
    this.signupButton = this.page.locator('#header li:nth-child(4)');
    this.loggedInUserText = this.page.locator('li:nth-child(10) > a');
    this.deleteAccountButton = this.page.locator('li:nth-child(5) > a');
    this.homeLogo = this.page.locator('.logo > a > img');
  }

  async gotosignup() {
    await this.signupButton.click()
  }

  async verifyHomePageLoaded() {
    await this.homeLogo.waitFor({ state: 'visible' });
    await expect (this.homeLogo).toBeVisible();
  }

  async verifyUserLoggedIn(username: string) {
    await expect(this.loggedInUserText).toHaveText(` Logged in as ${username}`);
  }

  async deleteAccount() {
    await this.deleteAccountButton.first().click();
  }

}