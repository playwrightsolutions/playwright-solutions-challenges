import { expect, test, Page } from "@playwright/test";

let page: Page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
});

test.describe("Swag Labs Tests ", () => {
  test("Login checks", async ({}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.fill('[data-test="username"]', "standard_user");
    await page.fill('[data-test="password"]', "secret_sauce");
    await page.click('[data-test="login-button"]');
    await page.getByRole("button", { name: "Open Menu" }).click();
    await expect(
      page.locator('[data-test="logout-sidebar-link"]')
    ).toBeVisible();
    expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");
    expect(1).toBe(2);
  });
});
