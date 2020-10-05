const playwright = require('playwright-chromium')
jest.setTimeout(30000);

let browser
let page

beforeAll(async () => {
  browser = await playwright.chromium.launch({ headless: false, slowMo: 1000 });
  page = await browser.newPage();
})

afterAll(async () => {
  await browser.close();
})


describe('UI', () => {

  xtest('Iframe', async () => {

    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe');
    await page.waitForSelector('iframe')
    const frames = page.frames()
    const frame = frames[2]
    await frame.waitForSelector('[class="w3-bar-item w3-button w3-hover-white w3-padding-16 w3-right"]')
    await frame.click('[class="w3-bar-item w3-button w3-hover-white w3-padding-16 w3-right"]')
  });

  test('Dark theme', async () => {
    await page.goto('https://bitaps.com/')
    await page.waitForSelector('[class="col menu-picto-wrap moon"]')
    await page.click('[class="col menu-picto-wrap moon"]')
  });
});