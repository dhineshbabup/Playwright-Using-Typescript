import { test, expect } from '@playwright/test';
import testData from "../../test-data/testData.json"

type TestData = {
  TestData_Set1: {
    skill1: String,
    skill2: String,
  },
  TestData_Set2: {
    skill1: String,
    skill2: String,
  }
}
const typedTestData = testData as TestData 
for (const data in typedTestData) {
  const skill = typedTestData[data as keyof TestData]
  test(`Read Datas for ${skill.skill1}`, async ({ page }) => {
    await page.goto(`${process.env.YOUTUBE_URL}`);
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill(`${skill.skill1}`);
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    
  });
  
}
test('Read Data from .env', async ({ page }) => {
  await page.goto(`${process.env.YOUTUBE_URL}`);
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.locator('#avatar-section').getByRole('link').click();
});