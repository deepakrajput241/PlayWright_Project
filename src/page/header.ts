import { chromium, Browser, BrowserContext, Page } from "@playwright/test";

export default class PlaywrightBrowser {
  private browser: Browser | null;
  private context: BrowserContext | null;
  private page: Page | null;

  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
  }

  async initialize() {
    this.browser = await chromium.launch(
        
    );
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async close() {
    if (this.page) {
      await this.page.close();
    }
    if (this.context) {
      await this.context.close();
    }
    if (this.browser) {
      await this.browser.close();
    }
  }

  async navigate(url: string) {
    if (this.page) {
      await this.page.goto(url);
    }
  }

  async click(selector: string) {
    if (this.page) {
      await this.page.click(selector);
    }
  }

  async fill(selector: string, value: string) {
    if (this.page) {
      await this.page.fill(selector, value);
    }
  }

  async getText(selector: string) {
    if (this.page) {
      return await this.page.innerText(selector);
    }
    return '';
  }

  async getAttribute(selector: string, attribute: string) {
    if (this.page) {
      return await this.page.getAttribute(selector, attribute);
    }
    return null;
  }

  async screenshot(path: string) {
    if (this.page) {
      await this.page.screenshot({ path });
    }
  }
}


