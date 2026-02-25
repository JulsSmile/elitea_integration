import { test, expect } from '@playwright/test';

test.describe('EPAM - Client Work link', () => {
  test('Verify Client Work page opens from Services -> Explore Our Client Work', async ({ page }) => {
    // 1. Navigate to EPAM home
    await page.goto('https://www.epam.com/');

    // 2. Open the header Services menu (hover/click depending on site behavior)
    // Use a robust locator that targets the link by its accessible name
    const servicesLink = page.getByRole('link', { name: 'Services' });
    await servicesLink.hover();

    // 3. Click the "Explore Our Client Work" link
    // The link may appear after hovering the Services menu; use a text locator
    const exploreLink = page.locator('text=Explore Our Client Work');
    await exploreLink.first().click();

    // 4. Verify that the "Client Work" text is visible on the page
    const clientWorkHeading = page.locator('text=Client Work');
    await expect(clientWorkHeading).toBeVisible({ timeout: 10000 });
  });
});
