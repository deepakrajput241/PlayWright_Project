import { test, Page, expect } from "@playwright/test";

test.describe("File Upload -sigle or multiple", async()=>{
    test.skip("Single or multiple file upload", async({page})=>{
        const path0 = "video1.webm";
        const path1 = "video.webm";
        await page.goto("https://www.sendgb.com");
        await page.click("(//button[@class='button'])[2]");
        await page.setInputFiles("input[name='qqfile']", [path0, path1]);
        await page.pause();
    })

    test("Using file chooser",async ({ page }) => {
        const path0 = "video1.webm";
        const path1 = "video.webm";
        await page.goto("https://the-internet.herokuapp.com/upload");
        await page.setInputFiles("#file-upload", path0);
        await page.click("input#file-submit", { force: true });
        await page.pause()


    })

    test("Another drag and drop", async( {page })=>{
        const path0 = "video1.webm";
        const path1 = "video.webm";
        await page.goto("https://the-internet.herokuapp.com/upload");
        page.on("filechooser", async(filechooser)=>{
            await filechooser.setFiles([path0, path1])
        })
        await page.click("//div[@id='drag-drop-upload']");
    })
})


