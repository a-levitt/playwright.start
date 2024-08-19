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
    await fieldUserName.fill("rahulshetty");
    const fieldPassword = await page.locator("//input[@id='password']");
    await fieldPassword.fill("learning");
    const buttonSignIn = await page.locator("//input[@id='signInBtn']");
    await buttonSignIn.click();
    const alertWrongUserData = await page.locator("//form[@id='login-form']/" +
                                                                    "div[@class='alert alert-danger col-md-12']");
    const alertText = await alertWrongUserData.textContent();
    //await console.warn("1: " + alertText);
    await expect(alertText).toContain("Incorrect");
    //await page.pause();
});