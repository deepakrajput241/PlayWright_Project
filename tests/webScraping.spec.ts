import { test } from "@playwright/test";

test("Calculate youtube playlist duration", async({ page })=> {
    const url = "https://www.youtube.com/playlist?list=PL699Xf-_ilW7EyC6lMuU4jelKemmS6KgD";
    await page.goto(url);
    const video = await page.$$("ytd-thumbnail-overlay-time-status-renderer span");
    console.log(video.length)
    let totalMin = 0; 
    await Promise.all(
        video.map(async ele => {
            const duration = await ele.innerText();
            const timeSlices = duration.trim().split(":");
            let min = 0;
            let sec = 0;
            if(timeSlices.length == 2) {
                min = Number(timeSlices[0]);
                sec = Number(timeSlices[1]);
                min += sec / 60;
            }else if (timeSlices.length == 3){
                let hours = Number(timeSlices[0])
                min = Number(timeSlices[1]);
                sec = Number(timeSlices[2]);
                min += ((hours * 60) + (sec / 60));
            }
            totalMin += min;
        })
    )
    console.log(totalMin);
    const hours = Math.floor(totalMin / 60);
    const min = Math.trunc(totalMin % 60);
    const sec = Math.trunc((totalMin - Math.trunc(totalMin)) * 60);
    console.log(
        `${hours}h ${min}m ${sec}s`
    );
})