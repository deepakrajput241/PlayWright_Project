import { test, expect } from "@playwright/test";

//create - post API

test("Create APi test", async ({ request, baseURL })=>{
    const _response = await request.post(`${baseURL}`, {
        data: {
            "short_description": "hello man",
            "category": "hardware"
        }, headers: {
             
        }
    })
    
    expect(_response.status()).toBe(201);
    expect(_response.ok()).toBeTruthy();
    console.log(await _response.json());

})
//Get or retive the data
test("Get an incident", async ({request, baseURL})=>{
    const _response = await request.get(`${baseURL}`);
    console.log(_response.json());
    
})
//update


//Delete