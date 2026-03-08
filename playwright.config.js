// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 120000,
  
  use: {
    headless: true,
    
    // 🔍 TRACE - This is what you need!
    trace: 'on',  // Always generate trace
    
    // 📹 VIDEO
    video: 'on',
    
    // 📸 SCREENSHOT
    screenshot: 'on',
  },
  
  // HTML Report
  reporter: [
    ['html', { open: 'never' }]
  ],
});
