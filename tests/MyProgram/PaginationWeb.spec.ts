import { test, expect } from "@playwright/test"

test("Print all the records on page", async ({ page })=> {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = await page.locator("table[id='productTable']");
    await table.scrollIntoViewIfNeeded({timeout:300})
    const rows = await table.locator("tr");
    console.log(await rows.count());
    expect(await rows.count()).toBe(6);
    const columns = await table.locator("td");
    console.log(await columns.count());
    expect(await columns.count()).toBe(20)
    const pages = await page.locator("#pagination li a");
    console.log(await pages.count());
    expect(await pages.count()).toBe(4);
    const rowData = [];
    for(let p=0; p< await pages.count(); p++)
    {
        if(p>0)
        {
            await pages.nth(p).click();
        }

        for(let i = 0; i< await rows.count(); i++)
        {
            const row = await rows.nth(i)
            const tds = await row.locator("td");
            for(let j=0; j< await tds.count()-1; j++)
            {
                console.log(await tds.nth(j).textContent());
                const allData = await tds.nth(j).textContent();
            //     const dataAll[myData] = 
            //    const jsonData = await JSON.stringify(allData)
            //    console.log(await jsonData);
            }

        }

    }
    await page.pause();
})