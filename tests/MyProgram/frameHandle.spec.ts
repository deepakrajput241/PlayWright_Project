import {test} from "@playwright/test";

test("Handle frames", async({page})=>{
    await page.goto("https://letcode.in/frame");
    const frameName = page.frame({ name: "firstFr" });
    if(frameName!= null)
    {
        await frameName.fill("input[name='fname']", "Deepak");
        await frameName.fill("input[name='lname']", "Rajput");
        const frames = frameName.childFrames();
        console.log("no of frames: "+frames.length);
        if(frames!=null)
        {
            await frames[1].fill('input[name="email"]','Deepak@gmaol.com');
        }else console.log("Wrong frame")
        const parent = frames[1].parentFrame();
        await parent?.fill("input[name='lname']", "Don");
        
    }else throw new Error("No such Element")
    await page.waitForTimeout(2000);
})