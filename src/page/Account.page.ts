import {Locator, Page, expect, request } from "@playwright/test";
import Wrapper from "../Wrapper";
import { faker } from "@faker-js/faker";
const data = {
    balanceType: "Balance Forward",
    detail: "Data",
    group: "Automation test group",
    normalBalance: "Credit",
    subtype: "Avon S",
    type: "Account Developer",
  };
export default class Account extends Wrapper{
    constructor(public page:Page){
        super(page);
    }

async fillInputBox(value: string, text: string) {
   
    await this.page.fill(`input[aria-label='${value}']`, text)
}

async addRepairCenter(){
    await this.page.locator('.enabled.ng-scope a.ng-binding', {hasText: "Repair Centers"}).click();
    await this.page.click("a#toolbarAddRepairCenter");
    await this.page.locator('table input').nth(2).click();
    await this.page.getByText('Add Selected').click();
    await this.page.getByText('Identity').click();
}

async fillRequiredFields(){  
        
    await this.fillInputBox("Segment 1", faker.string.numeric(4));
    await this.fillInputBox("Name  ", faker.company.name());
    await this.fillComboBox("Type ", data.type);
}

async clearInputBox(value: string){
    await this.page.fill(`input[aria-label='${value}']`, '');
}

async valueFromDisableTextBox(text: string){
    await this.page.waitForTimeout(200);
    const textValue =await this.page.$(`//dd[text()='${text}']`)
    const returnVal = await textValue?.textContent();
    await expect(returnVal).toBe(text) 
}

async clickSaveAndCheckAlert(alert: string){   
  
   await this.page.on("dialog", async (dialog)=>{
    const message = await dialog.message();
    console.log('alert message: '+message);
    dialog.accept();
    expect(message).toContain(alert);
    
    });
    //Click on Save Button
    await this.page.click('a[aria-label="Save"]');
    // await expect().toContain(alert);
    }

    async waitFor(){
        await this.page.waitForTimeout(2000);
    }

    async fillComboBox(ariaLabel: string, value: string){
        await this.page.locator(`input[aria-label='${ariaLabel}'][type='text']`).fill(value);
        await this.page.locator(`.k-list-scroller li.k-item.ng-scope`, {hasText: value}).click();
               
    }
 async clickSaveAndCheckResponse(){        
        const [response] =await Promise.all([
            this.page.waitForResponse(req=>
                req.request().method() == `POST`
                ),
                await this.page.click(`a[aria-label="Save"]`)
        ])       
        const statusCode = response?.status();
        expect(statusCode).toBe(200);
        // Retrieve the generated ID from the response or any other relevant information
        const responseBody = await response?.json();
        const generatedId = responseBody?.id || null; // Replace 'id' with the actual key containing the generated ID
        console.log(generatedId);
        return  generatedId;
        
    }
  

    // async clickSaveAndCheckResponse(element:string, method:any, url: any, code: number, bodyKey: any, bodyValue: any){        
    //     const [response] =await Promise.all([
    //         this.page.waitForResponse(req=>
    //             req.request().method() == `${method}`
    //             &&
    //             req.request().url() == `${url}`
    //             ),
    //             await this.page.click(`a[aria-label="${element}"]`)
    //     ])       
    //     const statusCode = response?.status();
    //     expect(statusCode).toBe(200);
    //     // Retrieve the generated ID from the response or any other relevant information
    //     const responseBody = await response?.json();
    //     const generatedId = responseBody?.id || null; // Replace 'id' with the actual key containing the generated ID
    
    //     return { statusCode, generatedId };
    // }

//   async clearInputBox(){
//     await this.page.locator('')
//   }

   

}
