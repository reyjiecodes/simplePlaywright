// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const baseURL = config.projects[0].use.baseURL;
  const storageState = config.projects[0].use.storageState;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(baseURL!);
  await page.waitForTimeout(5000);
  await page.locator(`#scr-reg-00-email-saml`).type(`john.tesla@test.medirecords.com`);
  await page.locator(`#scr-reg-00-continue-login-saml`).click()
  await page.waitForTimeout(5000);
  await page.locator(`#scr-reg-00-user-name`).type(`John.Testla`);
  await page.locator(`#scr-reg-00-password`).type(`test1234`);
  await page.locator(`#scr-reg-00-submit-login`).click()
  await page.waitForTimeout(5000);
  await page.context().storageState({ path: storageState as string });
  await browser.close();
}

export default globalSetup;
