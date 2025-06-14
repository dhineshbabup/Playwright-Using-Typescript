import { test, expect } from '@playwright/test';

test('Record test', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('dhinesh');
  await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('dhinesh123');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});