import { expect, test } from "@playwright/test";
const parameters = ["A2D Channel", "take U forward"];
for (const parameter of parameters) {
  test(`Parameterized Test ${parameter}`, async ({ page }) => {
    await page.goto('https://www.youtube.com/');
    await page.locator("//input[@name='search_query']").fill(parameter);
    await page.keyboard.press('Enter');
    await page.locator("#avatar-section").click();
    await expect(page).toHaveTitle(`${parameter} - YouTube`);
  });
}
