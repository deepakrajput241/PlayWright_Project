import { test, expect } from "@playwright/test";
test('Handle Input box', async ({ page })=>{
    await page.goto("https://itera-qa.azurewebsites.net/home/automation", { waitUntil: "load"});
    await page.fill("input#name", "Deepak Rajput");
    expect(await page.locator("input#name")).toHaveAttribute("placeholder", "Enter your name");
    const phoneField = await page.locator("input#phone");
    await expect(phoneField).toBeEditable();
    await expect(phoneField).toBeEmpty();
    await phoneField?.fill("9595319725");
    await expect.soft(phoneField).toHaveAttribute("placeholder", "Enter your mobile phone");
    const labelText = await page.locator("#male"); 
       
    await labelText?.check();
    await expect(labelText).toBeVisible();
    const dropDownText = await page.$$(".custom-select option")
    for(const option of dropDownText)
    {
        console.log(await option.textContent());
        const txt = await option.textContent();
        if(txt?.includes('Spain')){
            await page.selectOption(".custom-select", "Spain");
        }
    }

    
});
