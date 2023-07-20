import { Browser, BrowserContext, Page, chromium, test, expect } from "@playwright/test"

test.describe("Drag and drop @smoke", ()=>{
    let page: Page;
    let context: BrowserContext;
    let browser: Browser;
    test.beforeAll(async()=>{
        browser = await chromium.launch({
            headless: false,
            channel: "chrome"
        })
        context = await browser.newContext();
        page = await context.newPage();
    })
    test("Drag and Drop", async({page})=>{
        await page.goto("https://letcode.in/dropable");
        const source = await page.$("div#draggable")
        const target = await page.$("div#droppable")
        if(source && target){
            const src = await source.boundingBox();
            const dst = await target.boundingBox();
            if(src && dst){
                await page.mouse.move(src.x + src.width/2, src.y + src.height/2);
                await page.mouse.down();
                await page.mouse.move(dst.x+ dst.width/2, dst.y + dst.height/2);
                await page.mouse.down();
            }else throw new Error("No such element");
        }
        await page.pause();
    })

    test("Drag and Drop for Frames", async({page}, testInfo)=>{
       test.step("Test o deop down", async ()=>{
        await page.goto("https://jqueryui.com/droppable/", {waitUntil:"load"});
        
        await expect.soft(page).toHaveURL("https://jqueryui.com/droppable");
        await expect.soft(page).toHaveTitle("Droppable | jQuery UI");
        const frame = page.frame({url: "https://jqueryui.com/resources/demos/droppable/default.html" });
        if(frame)
        {
            const source = await frame.$("div#draggable")
            const target = await frame.$("div#droppable")
                if(source && target)
                    {
                    const src = await source.boundingBox();
                    const dst = await target.boundingBox();
                        if(src && dst){
                            await page.mouse.move(src.x + src.width/2, src.y + src.height/2);
                            await page.mouse.down();
                            await page.mouse.move(dst.x+ dst.width/2, dst.y + dst.height/2);
                            await page.mouse.down();
                        }
                        else throw new Error("No such element");
                    }
        }
        await testInfo.attach("Drag", {
            contentType: "image/png",
            body: await page.screenshot()
        })
        
       })
        // await page.pause();  
    })
})