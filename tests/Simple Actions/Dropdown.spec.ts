import {expect, test} from "@playwright/test"

test('Handle Dropdown', async({page}) => {
    await page.goto('http://facebook.com/')
    await page.getByRole('button', {name: "Create new account"}).click()

    //select using value
    await page.locator('#day').selectOption('23')

    //select using visible test 
    await page.locator('#month').selectOption('Mar')
    
    await page.locator('#year').selectOption('2004')

    //validate
    await expect(page.locator('#month > option')).toContainText(['Jan', 'Mar'])

})