const { test, expect } = require('@playwright/test');

test("Default test", async ({page}) => {
    await page.goto("https://www.hipotekarnabanka.com/");
    await expect(page).toHaveTitle("Hipotekarna Banka");
    //await page.pause();
});

test("Test with browser context", async ({browser}) => {
    const context = await  browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const getTitle = await page.title();
    expect(getTitle).toBe("LoginPage Practise | Rahul Shetty Academy");
    //await page.pause();
});