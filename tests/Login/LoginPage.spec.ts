import { expect, test } from "@playwright/test"
import LoginPage from "../../src/page/login.page";

test.describe("Login Test Validation", async () => {
   

    test("Login test with valid credential- Positive Test Case", async({ page }) => {    
       const login = new LoginPage(page);
        await page.goto("https://tmastaging.com/Login?ReturnUrl=%2F");
        await login.enterUserName("qat");
      
        await login.enterPassword("qat");
       
        await login.textBox("input#Client", "TMA7 Azure Staging Test");
        await login.ClickloginBtn();
        expect(await page.url()).toContain("https://tmastaging.com");
       
        const elementText = await page.textContent('text=My Dashboard'); 
       
        expect(elementText).toContain("My Dashboard");
        
    })
})