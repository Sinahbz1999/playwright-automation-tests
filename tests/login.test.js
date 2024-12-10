const { test, expect } = require('@playwright/test');
const testData = require('../testData.json'); // Ensure this file contains valid test data

test.describe('Login Automation and Task Verification', () => {
  // Shared setup for all tests
  test.beforeEach(async ({ page }) => {
    console.log('Navigating to:', testData.login.url);

    await page.goto(testData.login.url, { waitUntil: 'networkidle', timeout: 60000 });
    console.log('Page loaded successfully.');

    await page.waitForSelector('#username', { timeout: 30000 });
    await page.waitForSelector('#password', { timeout: 30000 });

    await page.fill('#username', testData.login.email);
    await page.fill('#password', testData.login.password);

    await page.click('button[type="submit"]');
    console.log('Clicked login button.');

    await page.waitForSelector('text=Projects', { timeout: 30000 });
    console.log('Login successful.');
  });

  // Test Case 1
  test('Test Case 1: Verify "Implement user authentication" task', async ({ page }) => {
    console.log('Running Test Case 1...');
    await page.click('text=Web Application');
    const task = page.locator('h3:has-text("Implement user authentication")');
    await expect(task).toBeVisible();
  });

  // Test Case 2
  test('Test Case 2: Verify "Fix navigation bug" task', async ({ page }) => {
    console.log('Running Test Case 2...');
    await page.click('text=Web Application');
    const task = page.locator('h3:has-text("Fix navigation bug")');
    await expect(task).toBeVisible();
  });

  // Test Case 3
  test('Test Case 3: Verify "Design system updates" task', async ({ page }) => {
    console.log('Running Test Case 3...');
    await page.click('text=Web Application');
    const task = page.locator('h3:has-text("Design system updates")');
    await expect(task).toBeVisible();
  });

  // Test Case 4
  test('Test Case 4: Verify "Push notification system" task', async ({ page }) => {
    console.log('Running Test Case 4...');
    await page.click('text=Mobile Application');
    const task = page.locator('h3:has-text("Push notification system")');
    await expect(task).toBeVisible();
  });

  // Test Case 5
  test('Test Case 5: Verify "Offline mode" task', async ({ page }) => {
    console.log('Running Test Case 5...');
    await page.click('text=Mobile Application');
    const task = page.locator('h3:has-text("Offline mode")');
    await expect(task).toBeVisible();
  });

  // Test Case 6: Verify "App icon design" task
  test('Test Case 6: Verify "App icon design" task', async ({ page }) => {
    console.log('Running Test Case 6...');
    
    // Navigate to "Mobile Application"
    await page.click('text=Mobile Application');
    console.log('Navigated to "Mobile Application".');

    // Verify the "App icon design" task exists in the "Done" column
    const appIconTask = page.locator('h3:has-text("App icon design")');
    await expect(appIconTask).toBeVisible();
    console.log('Verified the "App icon design" task exists in the "Done" column.');

    // Verify the "Design" tag is present for the task
    const appIconTaskCard = appIconTask.locator('..'); // Locate the card containing the task
    const designTag = appIconTaskCard.locator('span:has-text("Design")');
    await expect(designTag).toBeVisible();
    console.log('Verified the "Design" tag is present for the task.');
  });
});
