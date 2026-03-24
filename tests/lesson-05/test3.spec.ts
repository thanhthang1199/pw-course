import { test, expect } from '@playwright/test';

test('Todo page - add 100 todos and delete odd ones', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();

  // Auto-accept confirm dialog khi xóa todo
  page.on('dialog', async (dialog) => await dialog.accept());

  await test.step('Add 100 todo items', async () => {
    for (let i = 1; i <= 100; i++) {
      await page.locator('#new-task').fill(`Todo ${i}`);
      await page.locator('#add-task').click();
    }
  });

  await test.step('Delete all odd todos (Todo 1, 3, 5, ..., 99)', async () => {
    for (let i = 1; i <= 99; i += 2) {
      await page.locator(`#todo-${i}-delete`).click();
    }
  });
});
