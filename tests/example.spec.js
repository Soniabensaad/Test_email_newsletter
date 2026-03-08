// @ts-check
import { test, expect } from '@playwright/test';
import { InboxByEmailAddressResultFromJSON } from 'mailslurp-client';
test.use({
  video: 'on'  
});
const MailSlurp = require('mailslurp-client').default

test('signing up for newsletter', async ({ page }) => {
  const mailslurp = new MailSlurp({apiKey: 'sk_8GMFZTY5MeqMG8On_rI00Fx89B3PH3AWjulxBV1ulb6cQxEqLHh30lycr9PSk7PVy6fJeXj6q2KITZK2Q'})
  const inbox = await mailslurp.createInbox()
  await page.goto('https://newsletter.mailslurp.biz/');
const name = 'John Doe'
  await page.fill('#email', inbox.emailAddress);
  await page .fill('#name', name)
  await page.click('#submit')
  const email = await mailslurp.waitForLatestEmail(inbox.id, 120_000, true);
expect(email.body).toContain('Welcome ' + name)

})
