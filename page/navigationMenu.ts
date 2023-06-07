import {test, Page } from "@playwright/test"

export default class NavigationMenu{
    constructor(public page:Page){

    }

    async clickOnMenuPage(name:string){
        await this.page.click(`//span[text()[normalize-space()='${name}']]`)
    }
}

