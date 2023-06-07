import {expect, test} from "@playwright/test"
import login from "../page/login";
import NavigationMenu from "../page/navigationMenu";

test("Login Test @smoke", async ({page, baseURL}) => {
    const loginDetails = new login(page);
    const menuName = new NavigationMenu(page);
    await page.goto(`${baseURL}`);
    const urlText = page.url();
    expect(urlText).toContain("https://ecommerce-playground.lambdatest.io/");
    expect(await page.locator("img[alt='Poco Electro']")).toBeVisible();
    expect(await page.title()).toContain("Your Store");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
    await page.click("//span[contains(., 'Login')]");
    expect(await page.url()).toContain("account/login");
    expect(await page.locator("//h2[text()='Returning Customer']")).toContainText("Returning Customer");
    // const placeholderName = page.getByLabel("#input-email");
    // expect(placeholderName).toHaveValue("E-Mail Address");
    await loginDetails.enterEmailId("E-Mail Address", "Deepakrajput241@gmail.com");
    await loginDetails.enterPassword("Password", "Deepak@605");
    await page.click("//input[@type='submit']");
    // const countOfList = Promise.all([
    //    const text = await page.locator("")
    // ])
    // await menuName.clickOnMenuPage("Home");
    // await page.waitForTimeout(1000);
    await menuName.clickOnMenuPage("Home");

    await page.waitForTimeout(5000);

})
