import { Locator, Page } from "@playwright/test"


export default class Wrapper {
    constructor(public page:Page){

    }

    public async findLocator(value: string, options?:{
        tabId: number,
        frame?: string,
        window?: number,
        timeOut?: number,
        has?: Locator,
        hasText?: string
    }): Promise<Locator>{

        if(options?.window){
            this.page = this.page.context().pages()[options.tabId]
        }
        if(options?.frame){
            this.page.frameLocator(options.frame).locator(value, {
                has: options?.has,
                hasText: options?.hasText
            })
        }
        return this.page.locator(value, {
            has: options?.has,
            hasText: options?.hasText
        })
    }

    public getUrl(): string{
        return this.page.url();
    }

    public getTitle(): Promise<string>{
        return this.page.title();
    }

   

   
}