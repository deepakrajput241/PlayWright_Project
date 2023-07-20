import { test } from "@playwright/test";

test("Positive Test-Login Test",async ({page}) => {
    await page.goto("https://tmastaging.com/Login?ReturnUrl=%2F");        
        await page.fill("#Username", "qat");
        await page.fill("#Password", "qat");
        await page.fill("#Client", "TMA7 Azure Staging Test");
        await page.click("'Log in'");  
       
       const elementHandle = await page.$('a.dropdown-toggle'); 
       const txt = await elementHandle?.textContent();
    // for(const ele of txt)
    // {

    // }
       // Select an element using a CSS selector
    //    const textContent = await page.$eval<string, HTMLSelectElement>("a.dropdown-toggle", (ele) => {
    //     return ele.textContent.trim(); // Return the trimmed text content of the menu item
    //   });
      
    //     console.log(textContent);
        
        
        
    
   
})