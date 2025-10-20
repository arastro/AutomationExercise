import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config({ path: `.env.${process.env.ENVIRONMENT || 'qa'}` });

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 1,
  reporter: [['html'], ['allure-playwright']],
  outputDir: 'test-results/',
  use: {
    baseURL: `process.env.${process.env.ENVIRONMENT || 'qa'}.BASE_URL` || 'https://www.automationexercise.com/',
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } }
  ],
});