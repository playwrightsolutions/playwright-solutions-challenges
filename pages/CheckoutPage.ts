import { Locator, Page, expect } from "@playwright/test";
export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly totalPriceLabel: Locator;
  readonly finishButton: Locator;
  readonly orderConfirmationLabel: Locator; // Placeholder for verification

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator("#first-name");
    this.lastNameInput = page.locator("#last-name");
    this.postalCodeInput = page.locator("#postal-code");
    this.continueButton = page.locator("#continue");
    this.totalPriceLabel = page.locator(".summary_total_label");
    this.finishButton = page.locator("#finish");
    this.orderConfirmationLabel = page.locator(".complete-header");
  }
  /**
   * Challenge 5
   * Hmm... Hardcoded firstname , lastname and postal code?
   * Remember, data is king (and should be configurable!)
   */
  async fillCheckoutInformation() {
    await this.firstNameInput.fill("QA");
    await this.lastNameInput.fill("Task");
    await this.postalCodeInput.fill("12345");
    await this.continueButton.click();
  }
  async verifyTotalPrice() {
    /**
     * Challenge 6
     * These 3 amazing products (you added them, right?) should add up to $103.65 with VAT.
     * Can you implement the verify total price method then ?
     */
  }
  async submitOrder() {
    await this.finishButton.click();
  }

  async verifyOrderConfirmation() {
    /**
     * Challenge 7
     * Can you write some code to verify the order confirmation message?
     *  (Think: assertions and waiting for elements)
     */
  }
}
