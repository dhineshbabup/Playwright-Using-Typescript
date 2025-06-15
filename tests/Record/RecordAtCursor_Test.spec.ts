import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.locator('#avatar-section').getByRole('link').click();
  await page.locator('#tabsContent').getByText('Playlists').click();
  await expect(page.getByRole('link', { name: 'Learn Complete Playwright with TypeScript in 20 Hours | Learn Playwright From' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Playwright Complete Series -' })).toBeVisible();
});