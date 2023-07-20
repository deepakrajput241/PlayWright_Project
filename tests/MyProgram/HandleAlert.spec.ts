import { test } from "@playwright/test";

test("Handle Alert", async({ page })=>{
    await page.goto("https://letcode.in/alert");
    const ele = await page.$("button#prompt");
    page.on("dialog", (dialog)=>{
        console.log("Dialog Message: "+dialog.message());
        console.log("Default Value: "+ dialog.defaultValue());
        console.log("Type: "+ dialog.type());
        dialog.accept("Hello");
    });
    await ele?.click();


})

test("Read Api", async({page})=>{
    await page.goto("https://letcode.in/elements");
    const responce = await Promise.all([
        page.waitForResponse(res=>
            res.status()==200
            &&
            res.url() == 'https://api.github.com/users/ortonikc'
        ),
        await page.fill("inpput[name='username]", "ortonikc"),
        await page.click("button")

    ])
    console.log(await responce);
})