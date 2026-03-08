import {expect, test} from '@playwright/test'

test('To be hidden', async ({page})=> {
await page.goto ('https://the-internet.herokuapp.com/dynamic_loading/1')
await expect(page.locator('[id="finish"]')).toBeHidden()
await expect(page.locator('[id="finish"]')).toBeVisible()

await page.close()

})

test('To be enabled', async ({page})=> {
await page.goto ('https://the-internet.herokuapp.com/dynamic_controls')
await page.getByRole('button', { name: 'Enable' }).click()
await expect(page.getByRole('textbox')).toBeEnabled()

await page.close()

})

test('To have text', async ({page})=> {
await page.goto ('https://the-internet.herokuapp.com/dynamic_controls')
await page.getByRole('button', { name: 'Enable' }).click()
await expect(page.getByRole('textbox')).toBeEnabled()

await page.close()

})

test('To have attributute ', async ({page})=> {
await page.goto ('https://the-internet.herokuapp.com/dynamic_controls')
await expect(
  page.getByRole('button', { name: 'Remove' })
).toHaveAttribute('onclick', 'swapCheckbox()');
await expect(
  page.getByRole('button', { name: 'Enable' })
).toHaveAttribute('onclick', 'swapInput()');
await page.close()

})

test('To have url ', async ({page})=> {
await page.goto ('https://the-internet.herokuapp.com/dynamic_controls')
await expect(
  page.getByRole('button', { name: 'Remove' })
).toHaveAttribute('onclick', 'swapCheckbox()');
await expect(
  page.getByRole('button', { name: 'Enable' })
).toHaveAttribute('onclick', 'swapInput()');
await page.close()

})
