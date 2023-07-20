import {Page} from "@playwright/test"
import Wrapper from "../Wrapper";
export default class LoginPage extends Wrapper{

    constructor(public page:Page){
        super(page);
    }

    async enterUserName(username: string){
       const user = await this.findLocator("#Username");
        await user.waitFor({ state: "attached" });
        await user.type(username);

    }

    async enterPassword(password: string){
        const pass = await this.findLocator("#Password");
        await pass?.type(password);
    }

    async textBox(ele: string, text: string){
        await this.page.fill(ele, text);
    }

    async ClickloginBtn(){
        await this.page.click("text=Log in");
    }

}