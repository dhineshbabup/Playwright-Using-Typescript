import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.locator('#avatar-section').getByRole('link').click();
  await page.getByText('Playlists', { exact: true }).click();
  await expect(page.getByRole('link', { name: 'Learn Complete Playwright in' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Learn Complete Playwright with TypeScript in 20 Hours | Learn Playwright From' })).toBeVisible();
});