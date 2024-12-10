const { test, expect } = require('@playwright/test');
const testData = require('../testData.json');

test.describe('Login Automation and Task Verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(testData.login.url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.fill('#username', testData.login.email);
    await page.fill('#password', testData.login.password);
    await page.click('button[type="submit"]');
    await page.waitForSelector('text=Projects', { timeout: 30000 });
  });

  test('Test Case 1: Verify "Implement user authentication" task', async ({ page }) => {
    await page.click('text=Web Application');
    const task = page.locator('h3:has-text("Implement user authentication")');
    await expect(task).toBeVisible();
    const featureTag = task.locator('..').locator('span:has-text("Feature")');
    const highPriorityTag = task.locator('..').locator('span:has-text("High Priority")');
    await expect(featureTag).toBeVisible();
    await expect(highPriorityTag).toBeVisible();
  });

  test('Test Case 2: Verify "Fix navigation bug" task', async ({ page }) => {
    await page.click('text=Web Application');
    const task = page.locator('h3:has-text("Fix navigation bug")');
    await expect(task).toBeVisible();
    const bugTag = task.locator('..').locator('span:has-text("Bug")');
    await expect(bugTag).toBeVisible();
  });

  test('Test Case 3: Verify "Design system updates" task', async ({ page }) => {
    await page.click('text=Web Application');
    const task = page.locator('h3:has-text("Design system updates")');
    await expect(task).toBeVisible();
    const designTag = task.locator('..').locator('span:has-text("Design")');
    await expect(designTag).toBeVisible();
  });

  test('Test Case 4: Verify "Push notification system" task', async ({ page }) => {
    await page.click('text=Mobile Application');
    const task = page.locator('h3:has-text("Push notification system")');
    await expect(task).toBeVisible();
    const featureTag = task.locator('..').locator('span:has-text("Feature")');
    await expect(featureTag).toBeVisible();
  });

  test('Test Case 5: Verify "Offline mode" task', async ({ page }) => {
    await page.click('text=Mobile Application');
    const task = page.locator('h3:has-text("Offline mode")');
    await expect(task).toBeVisible();
    const featureTag = task.locator('..').locator('span:has-text("Feature")');
    const highPriorityTag = task.locator('..').locator('span:has-text("High Priority")');
    await expect(featureTag).toBeVisible();
    await expect(highPriorityTag).toBeVisible();
  });

  test('Test Case 6: Verify "App icon design" task', async ({ page }) => {
    await page.click('text=Mobile Application');
    const task = page.locator('h3:has-text("App icon design")');
    await expect(task).toBeVisible();
    const designTag = task.locator('..').locator('span:has-text("Design")');
    await expect(designTag).toBeVisible();
  });
});
