import { Locator, Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly shoppingCartButton: Locator;
  readonly addBackBackButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator(".title");
    this.shoppingCartButton = page.locator(".shopping_cart_link");
    this.addBackBackButton = page.locator("#add-to-cart-sauce-labs-backpack");
  }

  async gotoShoppingCart() {
    await this.shoppingCartButton.click();
  }
  async addBackPack() {
    await this.addBackBackButton.click();
  }

  /**
   * Challenge 3
   * Seriously? adding just one product? This is a demo site, let's live a little!
   * Add the first 3 products in the page to the cart but
   * those 3 products should be the high-price prodcuts.
   * Challenge accepted? then you will get bonus points for reusability ;)
   */
}
