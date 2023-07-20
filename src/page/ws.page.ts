import {Page} from "@playwright/test"
import Wrapper from "../Wrapper"

export default class WSPage extends Wrapper{
    constructor(public page: Page){
        super(page)
    }

    public async clickEditLink(options?:{
        tabId?: number
    }) {
        // console.log('Got new page?' + this.getUrl())
        await (await this.findLocator("//a[.='Edit']", {
            tabId: options?.tabId
        })).click({ timeout: 10000});
        

    }
}