const { test } = require('@playwright/test');

test("Default test", async ({page}) => {
    await page.goto("https://www.hipotekarnabanka.com/");
    //await page.pause();
});

test("Test with browser context", async ({browser}) => {
    const context = await  browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    //await page.pause();
});