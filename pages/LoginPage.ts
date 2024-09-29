import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator("#user-name");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("#login-button");
  }

  async navigateToWebsite() {
    await this.page.goto("https://www.saucedemo.com");
  }

  async login() {
    /**
     * Challenge 1
     * Our QA Engineers would rather be trapped in a Matrix with endless loops
     * than see hardcoded values. (Let's embrace best practices)
     */

    await this.emailInput.fill("standard_user");
    await this.passwordInput.fill("secret_sauce");
    await this.loginButton.click();

    /**
     * Challenge 2
     * Did we login successfully? Here's your chance to add confirmation!
     */
  }
}
