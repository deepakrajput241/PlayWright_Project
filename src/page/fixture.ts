import { Page } from "@playwright/test";
import { faker } from "@faker-js/faker";

export default class All_Locator{
    constructor(public page: Page){
        
    }
  
    ACCOUNTING_TAB = "div#navbar-collapse-1>ul>li:nth-of-type(4)>a"
    ACCOUNT_LINK = "li#liw1060>a"
    JOURNAL_ENTRY = "li#liw2066>a"
    NAV_BUTTON = '//a[@aria-label="${label}"]'
    SEGMENNT1 = faker.internet.email();
    password = faker.internet.password();
    newPassword = faker.internet.password();
    simplePassword = faker.internet.password();
    
    
    
}