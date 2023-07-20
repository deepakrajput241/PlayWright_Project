import {test, expect } from "@playwright/test";

test("visual comparison", async ({page})=>{
    await page.goto("https://letcode.in");
    const src = await page.screenshot({
        fullPage: true
    });
    expect(src).toMatchSnapshot('letcode.png');
})