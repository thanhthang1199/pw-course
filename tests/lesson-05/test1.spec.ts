import { test, expect } from '@playwright/test';

test('Register page - fill all fields and submit', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

  await test.step('Fill username', async () => {
    await page.locator('input[name="username"]').fill('thang');
  });

  await test.step('Fill email', async () => {
    await page.locator('input[name="email"]').fill('nguyenthanh.thang1199@gmail.com');
  });

  await test.step('Fill date of birth', async () => {
    await page.locator('input[name="dob"]').fill('1999-01-01');
  });

  await test.step('Select gender', async () => {
    await page.locator('input[name="gender"][value="male"]').check();
  });

  await test.step('Select country', async () => {
    await page.locator('select[name="country"]').selectOption('United States');
  });

  await test.step('Check hobbies', async () => {
    await page.locator('input[name="hobbies"][value="reading"]').check();
  });

  await test.step('Check interests', async () => {
    await page.locator('select[name="interests"]').selectOption(['Technology', 'Science']);
  });

  await test.step('Fill biography', async () => {
    await page.locator('textarea[name="bio"]').fill('Bài tập số 5');
  });

  await test.step('Select rating', async () => {
    await page.locator('input[name="rating"]').fill('4');
  });

  await test.step('Toggle feature', async () => {
    await page.locator('label[for="toggleOption"]').click();
  });

  await test.step('Subscribe newsletter', async () => {
    await page.locator('input[name="newsletter"]').check();
  });

  await test.step('Click Register', async () => {
    await page.getByRole('button', { name: 'Register' }).click();
  });
});
