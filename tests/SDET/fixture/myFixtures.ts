import { test as baseTest } from "@playwright/test";

type deepak = {
    hey: string;
}

const fixture = baseTest.extend<deepak>({
    hey: "I am Let come",

})

export const test = fixture;
export const expect = fixture.expect