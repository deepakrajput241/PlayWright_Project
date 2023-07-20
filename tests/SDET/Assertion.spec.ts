import { test, expect } from "@playwright/test"

test('Assertion', async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register");
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");
    await expect(page).toHaveTitle("nopCommerce demo store. Register");
   //Verify Logo
   const logo = await page.locator('.header-logo a')
   await expect(logo).toBeVisible();

   
})