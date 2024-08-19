const { test, expect } = require('@playwright/test');

test.skip("Default test", async ({page}) => {
    await page.goto("https://www.hipotekarnabanka.com/");
    await expect(page).toHaveTitle("Hipotekarna Banka");
    //await page.pause();
});

test("Test with browser context", async ({browser}) => {
    const context = await  browser.newContext();
    const page = await context.newPage();

    const fieldUserName = await page.locator("//input[@id='username']");
    const fieldPassword = await page.locator("//input[@id='password']");
    const buttonSignIn = await page.locator("//input[@id='signInBtn']");
    const alertWrongUserData = await page.locator("//form[@id='login-form']/" +
        "div[@class='alert alert-danger col-md-12']");
    const listProductTitles = await page.locator("//div[@class='card-body']//a");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const getTitle = await page.title();
    expect(getTitle).toBe("LoginPage Practise | Rahul Shetty Academy");

    await fieldUserName.fill("rahulshetty");
    await fieldPassword.fill("learning");
    await buttonSignIn.click();
    const alertText = await alertWrongUserData.textContent();
    //await console.warn(alertText);
    await expect(alertText).toContain("Incorrect");

    await fieldUserName.clear();
    await fieldUserName.fill("rahulshettyacademy")
    await buttonSignIn.click();
    //await console.warn(await listProductTitles.first().textContent());
    //await console.warn(await listProductTitles.nth(1).textContent());
    await page.waitForURL("https://rahulshettyacademy.com/angularpractice/shop")
    const allTitles = await listProductTitles.allTextContents();
    console.log(allTitles);
    //await page.pause();
});