import {test } from "@playwright/test";

test("Read Api Wait for Responce", async ({page}) => {
    await page.goto("https://letcode.in/elements");
    const [responce] = await Promise.all([
        page.waitForResponse(res =>
            res.status() == 200
            &&
            res.url() == 'https://api.github.com/users/ortonikc'
            &&
            res.body().then(b => {
                console.log(b);
                return b.includes("Koushik Chatterjee")
            })
            ),
            page.fill("input[name='username']", "ortonikc"),
            page.click("#search", {strict: true})
    ])
    console.log(await responce.json());
    
})