import { expect, test } from "@playwright/test";

test.describe("Window handler", ()=> {
   
    test("window handler", async({page})=>{
        await page.goto("https://letcode.in/windows");
        const titles = await page.title();
        console.log(titles);
        expect(titles).toBe("Window handling - LetCode");
    });

    test("Single window handler", async({context})=>{
        const page = await context.newPage();
        await page.goto("https://letcode.in/windows");
        const [singleWindow] = await Promise.all([
            context.waitForEvent("page"),
            await page.click("#home")
        ]);
        await singleWindow.waitForLoadState("load");
        expect(singleWindow.url()).toContain("test");
        
        await singleWindow.click("//a[contains(text(),'Inner HTML')]");
        await page.bringToFront();
       
    })
    test("Muti window handle", async({page, context})=>{
        await page.goto("https://letcode.in/windows");
        const [allWindow] = await Promise.all([
            context.waitForEvent("page"),
            await page.click("#multi")
        ]);

        await allWindow.waitForLoadState();
        const multi = allWindow.context().pages();
        console.log("No of pages"+ multi.length);
        multi.forEach(page =>{
            console.log(page.url())
        })
        await multi[1].bringToFront();
        multi[1].on("dialog", (dialog)=>{
            dialog.accept();
        })
        await multi[1].click("id=confirm");
    })
    
})