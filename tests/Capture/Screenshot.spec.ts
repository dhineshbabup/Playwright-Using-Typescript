import {test} from "@playwright/test"

test('Capture screenshot', async({page}) => {
    await page.goto('https://www.youtube.com/');

    //Element screenshot
    const mic = await page.locator("(//div[@class='yt-spec-touch-feedback-shape__fill'])[2]")
    await mic.screenshot({path: './screenshot/mic.png'})

    //page screenshot
    await page.screenshot({path: './screenshot/page.jpeg'});

    // full page screenshot
    await page.screenshot({path: './screenshot/fullpage.png', fullPage: true})
})