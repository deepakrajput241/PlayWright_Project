import {test} from "@playwright/test";
test("Login without value", async ({browser}) => {
    const context = await browser.newContext({
        storageState: "./auth.json"
    });
    const page = await context.newPage()
    await page.goto("https://tmastaging.com/");
    await page.waitForLoadState("load");
    
})