import { test, Page } from "@playwright/test";
test.describe("Different type of Input", () => {
   test("Enter your full Name", async ({ page })=>{
    await page.goto("https://letcode.in/edit");    
    
    const fname = await page.$("#fullName");
    await fname?.type("Deepak Rajput");
    const attr = page.getByPlaceholder("Enter first & last name");
    console.log(attr);
    
   })

   test("What is inside the text box", async({page})=>{
    await page.goto("https://letcode.in/edit"); 
    const text = await page.getAttribute("input#getMe", "value");
    console.log(text)
    await page.pause()
   })

   test("Append a text and press keyboard tab", async({page})=>{
    await page.goto("https://letcode.in/edit"); 
    const text = await page.$("#join");
    await text?.focus();
    await page.keyboard.press("End");
    await text?.type(" Deepak Rajput");
    await page.pause()
   })
})