import {test,expect} from '@playwright/test';


test('validate home page text on Testkaru',{tag:'@SmokeTest'},async ({page})=>{
     await page.goto('https://testkru.com/');
  await expect(page.getByRole('link', { name: 'Codekru playground' })).toBeVisible();

})

test('vaildate home page content',{tag:'@smoketest'},async({page})=>{
      await page.goto('https://testkru.com/');
      await expect(page.locator('#content')).toBeVisible();
})