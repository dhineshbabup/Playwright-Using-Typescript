import { expect, test } from "@playwright/test";

test("Drag and drop", async ({ page }) => {
  await page.goto("https://jqueryui.com/droppable/");
  const iframe = await page.frameLocator(".demo-frame");
  await iframe.locator("#draggable").dragTo(await iframe.locator("#droppable"));
});
