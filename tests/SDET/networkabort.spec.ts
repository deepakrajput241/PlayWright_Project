import {test} from "@playwright/test";
test("Block Images - Network Intercept@smoke", async ({page})=>{
    await page.route("**/*", request =>{
        return request.request().resourceType() === 'image' 
            ? request.abort() :
             request.continue();
    });
    await page.goto("https://unsplash.com/t/people");
    await page.waitForTimeout(3000)
})