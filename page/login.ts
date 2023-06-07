import { test , Page} from "@playwright/test"

export default class login{
    constructor(public page:Page){

    }

    async enterEmailId(emailText: string, value: string){
        await this.page.type(`//label[text()='${emailText}']`, value);

    }

    async enterPassword(lebal:string, value:string){
        await this.page.type(`//label[text()='${lebal}']`, value);
    }

}