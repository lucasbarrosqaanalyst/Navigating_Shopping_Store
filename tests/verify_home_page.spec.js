// @ts-check
const { test, expect } = require('@playwright/test');

test('Verify if home page is shown for users', async ({ page }) => {
  await page.goto('/');

  // Show home title
  const homeTitleImg = page.getByAltText('Automation Test Store');
  const homeBodyElement = page.locator('body[class="home"]');

  // Expect home title to be visible.
  await expect(homeTitleImg).toBeVisible();
  await expect(homeBodyElement).toBeVisible();
  
  await expect(page).toHaveURL('/');
});
