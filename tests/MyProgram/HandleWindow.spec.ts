import {test } from "@playwright/test";

test("Test", async({context})=>{
    const page = await context.newPage();
    await page.goto("https://letcode.in/windows");
    
    const [multi] = await Promise.all([
        context.waitForEvent("page"),
        await page.click("#home")
    ]);
    console.log()
    await multi.waitForLoadState();
    const tab = await multi.context().pages();
    await tab[0].bringToFront();
   
    const [pagesTab] = await Promise.all([
        context.waitForEvent("page"),
        await tab[0].click("#multi")
    ])
    await pagesTab.waitForLoadState();
    const multiTab = await pagesTab.context().pages();   
   
    for(const ltab of multiTab)
    {
        console.log(await ltab.url());
    }
   await multiTab[2].bringToFront();
  
    multiTab[2].on("dialog", dialog=>{
        console.log(dialog.message());
        console.log(dialog.type());
        dialog.accept();
        multiTab[2].click("#accept");
    })


   
   
   multiTab[2].on("dialog", dialog=>{
    console.log(dialog.message());
    console.log(dialog.type());
    dialog.accept();
    multiTab[2].click("#confirm");
   })
   
    await page.waitForTimeout(5000);

})