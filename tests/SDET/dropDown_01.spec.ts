import { test } from "@playwright/test";


    test("verify Simple Dropdown ", async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.locator("#country").scrollIntoViewIfNeeded({timeout: 1000});
        await page.selectOption("#country", {label: "United Kingdom"});
        
    });

    test("Verify multi dropdown", async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.locator("#colors").scrollIntoViewIfNeeded({timeout:1000});
        await page.selectOption("#colors", [
            {value: 'blue'}, { label: 'Yellow'}
        ])         
    });

    test("verify ", async ({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        const drag = await page.locator('div#draggable');
        const drop = await page.locator("div#droppable")

        await drag.dragTo(drop);
        
    })

    test("Enter text", async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.type(".wikipedia-search-input", "Deepak")
        await page.locator(".wikipedia-search-button").click();
        await page.waitForSelector("#wikipedia-search-result-link a")
        const links = await page.$$("#wikipedia-search-result-link a")
       for(const link of links){
        const text = await link.textContent();
        console.log(text);      
        
       }
       
        // await page.pause()
    })

    //expect(page).toHaveTitle("ABCC");
    //expect(page).toBe("value");
    //expect(page).toBeVisible();
    //expect(page).toBeDisable()'
    //.toHaveUrl()
    //.toBeEditable()
    //.toBeEnable();
    //.toHaveText();
    //.toBeChecked();
    //.toBeUnchecked()
    //.toContainText();
    //.toHaveValue()
    //.toHaveCount();
    //.toHaveAttribute();
    