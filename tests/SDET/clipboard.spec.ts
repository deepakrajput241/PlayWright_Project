import { test } from "@playwright/test";

const clipboard = require("clipboard");

test("Acccess clipboard", async ({ page }) => {
    await test.step("Goto the https://clipboardjs.com", async () => {
        await page.goto("https://clipboardjs.com");
    });
    await test.step("click on copy button", async () => {
        await page.click("div#example-text button");
    });
    
    await test.step("access the clipboard", async () =>{
        let text = await clipboard.read();
        console.log('From clipboard: '+ text);
        
    });
});