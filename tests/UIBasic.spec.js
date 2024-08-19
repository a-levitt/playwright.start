const { test, expect } = require('@playwright/test');

test.skip("Default test", async ({page}) => {
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
    const fieldUserName = await page.locator("//input[@id='username']");
    await fieldUserName.waitFor();
    await fieldUserName.fill("rahulshetty");
    const fieldPassword = await page.locator("//input[@id='password']");
    await fieldPassword.waitFor();
    await fieldPassword.fill("learning");
    const buttonSignIn = await page.locator("//input[@id='signInBtn']");
    await buttonSignIn.waitFor();
    await buttonSignIn.click();
    await page.pause();
});