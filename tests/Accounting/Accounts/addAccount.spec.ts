import { test, Page } from "@playwright/test";
import Account from "../../../src/page/Account.page";
import LoginPage from "../../../src/page/login.page";
import { faker } from "@faker-js/faker";
const data = {
    balanceType: "Balance Forward",
    detail: "Data",
    group: "Automation test group",
    normalBalance: "Credit",
    subtype: "Avon S",
    type: "Account Developer",
  };
   
    test("Add Account without require fields@sanity",async ({page}) => {  
        const login = new LoginPage(page);
        const account = new Account(page);
       
            
            await page.goto("https://tmastaging.com/#!/Account/Create", {waitUntil:"load", timeout: 5000});
          
            await login.enterUserName("qat");
            await login.enterPassword("qat");
            await login.textBox("#Client", "TMA7 Azure Staging Test")
            await login.ClickloginBtn();

            await account.waitFor();
            //Missing sagment 1
            await account.fillRequiredFields();
            await account.clearInputBox('Segment 1');
            await account.clickSaveAndCheckAlert("Segment 1 is required\nAccount # is required");
        // missing name
        await page.reload();
            await page.waitForLoadState("load");
           
            await account.fillRequiredFields();
            await account.clearInputBox('Name  ')
            await account.clickSaveAndCheckAlert('Name  is required\n');
            // await page.pause();

            //missing type
            await page.reload({timeout: 2000});
            await account.fillRequiredFields();
            await account.clearInputBox('Type  ');
            await account.clickSaveAndCheckAlert('Type  is required\n')
            
            //missing repair center
            await page.reload({timeout: 2000});
            await account.fillRequiredFields();
            await account.clickSaveAndCheckAlert('Repair Centers\n\nAt least 1 record is required for Account Repair Center Grid\n')
    });

    test.skip("Fill All Account required fileds", async({page})=>{
        const login = new LoginPage(page);
        const account = new Account(page);
        await page.goto("https://tmastaging.com/#!/Account/Create", {waitUntil:"load", timeout: 5000});
          
        await login.enterUserName("qat");
        await login.enterPassword("qat");
        await login.textBox("#Client", "TMA7 Azure Staging Test")
        await login.ClickloginBtn();

        await account.waitFor();
        await account.fillInputBox("Segment 1", faker.string.numeric(4));
        
        await account.fillInputBox("Name  ", faker.company.name());
        await account.fillComboBox("Type ", data.type);
        await account.clickSaveAndCheckAlert('Repair Centers\n\nAt least 1 record is required for Account Repair Center Grid\n');
    })

   



