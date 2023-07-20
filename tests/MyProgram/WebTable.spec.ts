import { test, expect, Locator, Page } from "@playwright/test";

test("Webtable testing", async ({ page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = await page.locator("table[name='BookTable']");
    const column = await table.locator("th");
    expect(await column.count()).toBe(4)
    console.log("Coulumn count: ", await column.count());
    const row = await table.locator("tr");
    expect(await row.count()).toBe(7);
    console.log("Row count: ", await row.count());
    await selectProduct(row, page, "Learn Selenium")
    
})

async function selectProduct(row: Locator, page:Page, name: string){
    const matchRow = await row.filter({
        has: page.locator('td'),
        hasText: name
    })
        
    console.log(await matchRow.textContent());
}