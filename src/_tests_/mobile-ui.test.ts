import playwright, { webkit, devices } from "playwright";

const iPhone = devices["iPhone 7"];
let browser;
let context;

beforeAll(async () => {
  browser = await webkit.launch();
  context = await browser.newContext({ ...iPhone });
});

afterAll(async () => {
  await browser.close();
});

describe("UI", () => {
  test("Google search", async () => {
    const page = await context.newPage();
    await page.goto("https://www.google.com", { timeout: 10000 });
    await page.fill(".gLFyf", "Codifun");
    await page.keyboard.press("Enter");
  });
});
