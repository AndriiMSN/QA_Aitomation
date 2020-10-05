const playwright = require('playwright-chromium')
const { webkit, devices } = require('playwright-chromium')
jest.setTimeout(30000);

let browser
let page

beforeAll(async () => {
  browser = await playwright.chromium.launch({ headless: false, slowMo: 1000 });
})
beforeEach(() => {

})
afterEach(() => {

})
afterAll(async () => {
  await browser.close();
})
describe('UI', () => {

  test('1 - Browser go to link', async () => {
    page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/');
  })

  xtest('2 - Add/Remove elements', async () => {
    await page.click('[href="/add_remove_elements/"]')
    await page.click('button[onclick="addElement()"]')
    await page.waitForSelector('.added-manually')
  });

  xtest('3 - Auth', async () => {
    const context = await browser.newContext({
      httpCredentials: {
        username: 'admin',
        password: 'admin'
      }
    });
    page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/basic_auth")
    await page.waitForSelector('#content')
    // await page.waitForSelector('text=....')
  });

  xtest('4 - checkbox', async () => {
    const context = await browser.newContext()
    page = await context.newPage()
    await page.goto('https://the-internet.herokuapp.com/checkboxes')
    await page.check('#checkboxes [type="checkbox"]:nth-child(1)')
    await page.uncheck('#checkboxes [type="checkbox"]:nth-child(3)')
  });
  xtest('5 - context-menu', async () => {
    const context = await browser.newContext()
    page = await context.newPage()
    await page.goto('https://the-internet.herokuapp.com/context_menu')

    await page.click('#hot-spot', { button: "right" })

  });

  xtest('6 - dropdown', async () => {
    const context = await browser.newContext()
    page = await context.newPage()
    await page.goto('https://the-internet.herokuapp.com/dropdown')

    await page.selectOption('#dropdown', '2')

  });

  xtest('7 - Disabled input', async () => {
    const context = await browser.newContext()
    page = await context.newPage()
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls')

    await page.click('#input-example [type="button"]')
    await page.waitForSelector('[type="text"]:not([disabled])')

  });
  xtest('Notification', async () => {
    await page.goto('https://the-internet.herokuapp.com/notification_message_rendered')

    await page.click('[href="/notification_message"]')
    await page.waitForSelector('#flash')

  });
  xtest('Mobile', async () => {
    const context = await browser.newContext(devices["iPhone 6"])
    page = await context.newPage();
    await page.goto('https://github.com/')
    await page.waitForSelector('[class="btn-link d-lg-none mt-1 js-details-target"]')
    await page.click('[class="btn-link d-lg-none mt-1 js-details-target"]')
    await page.waitForSelector('[href="/login"]')
  });
  xtest('new window', async () => {
    const context = await browser.newContext()
    page = await context.newPage();
    await page.goto()
    await page.click()
    await context.waitForEvent('page');
    const pages = await context.pages()
    const page2 = pages[1]
    await page2.waitForSelector()

  });

  test('Key press ', async () => {
    await page.goto('https://the-internet.herokuapp.com/key_presses')
    await page.press('#target', 'ArrowLeft')
    await page.waitForSelector('#result')
    await page.waitForSelector('text=You entered: LEFT')
  });

  // setInputFiles
})