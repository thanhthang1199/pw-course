import { test, expect } from '@playwright/test';

test('Product page - add products to cart', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();

  await test.step('Add product 1 - 2 times', async () => {
    await page.locator('.add-to-cart[data-product-id="1"]').click();
    await page.locator('.add-to-cart[data-product-id="1"]').click();
  });

  await test.step('Add product 2 - 3 times', async () => {
    await page.locator('.add-to-cart[data-product-id="2"]').click();
    await page.locator('.add-to-cart[data-product-id="2"]').click();
    await page.locator('.add-to-cart[data-product-id="2"]').click();
  });

  await test.step('Add product 3 - 1 time', async () => {
    await page.locator('.add-to-cart[data-product-id="3"]').click();
  });
  
});
