import { test, Page } from "@playwright/test"

export default class Request{
    
    constructor(public page: Page){
        
    }

    async clickOnRequestLog(){
        await this.page.waitForTimeout(1000);
        // await this.page.waitForLoadState();
        await this.page.locator('#navbar-collapse-1 a').filter({ hasText: 'Transactions' }).click();
        await this.page.locator('#lim1126').getByText('Request', { exact: true }).click();
        await this.page.getByRole('link', { name: 'Request Log' }).click();
      
        await this.page.getByRole('link', { name: 'Add' }).click();
    }

    async clickonAddBtn(){
        await this.page.click("(//span[@class='glyphicons glyphicons-plus'])[2]");
    }

    async fillRequiredFilled(){
       
        await this.page.getByRole('combobox', { name: 'Requestor Name' }).fill("QA Automation PLEASE DO NOT DEACTIVATE");
        
        await this.page.click("//button[@aria-label='Request Type']");
        await this.page.waitForLoadState();
        await this.page.locator("//div[@class='ng-isolate-scope']").first().click();
    }

}