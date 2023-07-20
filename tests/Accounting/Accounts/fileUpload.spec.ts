import { test } from "@playwright/test"

test("Test upload file", async ({page}) =>{
    const filePath0 = "video.webm";
    const filePath1 = "";
    await page.goto("https://www.sendgb.com/", {waitUntil: "domcontentloaded"});
    await page.locator("(//button[@class='button'])[2]").click();
    await page.setInputFiles("input[name='qqfile']", [filePath0])
    await page.waitForTimeout(2000);
    page.on("filechooser", async(filechooser) => {
        await filechooser.setFiles([filePath0])
    })
})
test("multiple on upload", async({page}) => {
    const filePath0 = "video.webm";
    const filePath1 = "";
    await page.goto("https://www.sendgb.com/", {waitUntil: "domcontentloaded"});
    await page.locator("(//button[@class='button'])[2]").click();
   
    await page.waitForTimeout(2000);
    page.on("filechooser", async(filechooser) => {
        await filechooser.setFiles([filePath0]);
        
})
});