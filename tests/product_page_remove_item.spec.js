import { test } from "@playwright/test";

test("Teste", async({page})=>{
    await page.goto('/');
    await page.pause();
});
