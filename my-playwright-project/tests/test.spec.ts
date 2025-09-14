import { test, expect } from '@playwright/test';

test.describe('My First Playwright Test Suite', () => {
  test.beforeEach(async ({ page }) => {
    // This will run before each test in this describe block
    await page.goto('https://example.com');
  });

    
    test('basic test: check page title', async ({ page }) => {
        // await page.goto('https://example.com');
        const title = await page.title();
        expect(title).toBe('Example Domain');
    });

    test.afterEach(async ({ page }) => {
        // This will run after each test in this describe block
        await page.close();
    });
});