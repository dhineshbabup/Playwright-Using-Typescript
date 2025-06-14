import { test } from "@playwright/test";

test("Date Picker", async ({ page }) => {
  await page.goto("https://jqueryui.com/datepicker/");
  const iframe = await page.frameLocator(".demo-frame");

  //select date
  await iframe.locator("#datepicker").fill("06/02/2025");

  //select current date
  await iframe.locator("#datepicker").click();
  await iframe.locator(".ui-datepicker-today").click();

  //select past date
  await iframe.locator("#datepicker").click();
  while (true) {
    await iframe.locator("//span[text()='Prev']").click();
    const month = await iframe.locator(".ui-datepicker-month").textContent();
    const year = await iframe.locator(".ui-datepicker-year").textContent();
    if (year === "2004" && month === "March") break;
  }
  await iframe.locator("//a[text()='23']").click();
});
