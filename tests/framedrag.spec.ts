import { test } from "@playwright/test"

    test("my test", async ({ browser }) => {
        const context = await browser.newContext();
        //start tracing
        await context.tracing.start(
            {
                screenshots: true, snapshots: true
            }
        )
        const page = await context.newPage();
        await page.goto("https://jqueryui.com/droppable/");
       const frame = page.frame({ url: "https://jqueryui.com/droppable/resources/demos/droppable/default.html"})
        if(frame){
        const src = await frame.locator("div#draggable");
        const dst = await frame.locator("div#droppable");
        if(src && dst ){
           const srcBound = await src.boundingBox();
           const dstBound = await dst.boundingBox();
           if(srcBound && dstBound){
                await page.mouse.move(srcBound.x+srcBound.width/2, srcBound.y+srcBound.height/2)
                await page.mouse.down();
                await page.mouse.move(dstBound.x+dstBound.width/2, dstBound.y+dstBound.height/2)
                await page.mouse.down();
           } else {
            throw new Error("No Element ")
           }
        }
        
        }
        await context.tracing.stop({path: 'trace.zip'});
    })
