import { test } from "@playwright/test"

test.describe("Multi Elements ", ()=>{
    test("Find Single elements", async({page})=>{
        await page.goto("https://letcode.in/elements");
        const ele = await page.$("input[name='username']");
        await ele?.fill("ortonikc");
        await ele?.press("Enter", { timeout: 2000});
        await ele?.screenshot({path: 'ele.png'});
        await page.waitForSelector("app-gitrepos ol li", {timeout: 2000});
        const multiEle = await page.$$("app-gitrepos ol li");
        console.log(multiEle.length);

        // for await(const repo of multiEle){
        //     console.log(await repo.innerText());
        // }
        //map function use and resloving promises 
        const urlText = await Promise.all(multiEle.map(async(repo, i)=>{
            return await repo.innerText();
        }))
        console.log(urlText);
        await page.screenshot({path: Date.now() + 'screenshot.png', fullPage: true})
        // await page.pause();
    })
})