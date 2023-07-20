import { test, expect } from "@playwright/test";

test("select Single value dropdown", async({ page })=>{
    await page.goto("https://letcode.in/dropdowns");
    const fruits = await page.$("#fruits");
    await fruits?.selectOption("4");
    const text = await page.$eval<string, HTMLSelectElement>("#fruits", ele=>ele.value);
    expect(text).toBe("4");
    const msg = await page.$("div.notification.is-success");
    expect(await msg?.textContent()).toContain("Pine Apple");
   
});

test("Select multiple dropdown value", async({ page })=>{
    await page.goto("https://letcode.in/dropdowns");
    const multi = await page.$("#superheros");
    
    await multi?.selectOption([
        {label: "Black Panther"}, {value: "cm"}, {index: 8}
    ]);
    await page.pause();
})

test("Get selected text", async({ page })=>{
    await page.goto("https://letcode.in/dropdowns");
    await page.selectOption("#country", "India");
    const text = await page.$eval<string, HTMLSelectElement>("#country", ele=>ele.value);
    console.log(text);
    expect(text).toBe("India");

})