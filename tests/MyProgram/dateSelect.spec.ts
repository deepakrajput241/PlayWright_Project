import { test, Page } from "@playwright/test";

class DatePic{
    constructor(public page: Page){

    }
    async selectCalendar(date: string, month: string, year: string){
        while(true){
            const currentYear = await this.page.locator("(//div[@class='ui-datepicker-title']//span)[2]").textContent();
            const currentMonth = await this.page.locator("//div[@class='ui-datepicker-title']//span[1]").textContent();
            if(currentYear == year && currentMonth == month)
            {
                break;
            }
            await this.page.locator("[title='Next']").click();
        
           }
        
           const currentDate = await this.page.$$("//a[@class='ui-state-default']")
           for(const dt of currentDate)
           {
               if(await dt.textContent()== date)
               {
                await dt.click()
                break;
               }
           }
    }
}

test("Date Piker", async ({page})=>{
   
    const selectDate = new DatePic(page);
    await page.goto("https://testautomationpractice.blogspot.com");
    await page.locator("input#datepicker").scrollIntoViewIfNeeded({timeout:200});
    await page.locator("input#datepicker").click();
    await selectDate.selectCalendar("15", "July", "2026");
   
    
//    while(true){
//     const currentYear = await page.locator("(//div[@class='ui-datepicker-title']//span)[2]").textContent();
//     const currentMonth = await page.locator("//div[@class='ui-datepicker-title']//span[1]").textContent();
//     if(currentYear == year && currentMonth == month)
//     {
//         break;
//     }
//     await page.locator("[title='Next']").click();

//    }

//    const currentDate = await page.$$("//a[@class='ui-state-default']")
//    for(const dt of currentDate)
//    {
//        if(await dt.textContent()==day)
//        {
//         await dt.click()
//         break;
//        }
//    }
   
    await page.pause();
})