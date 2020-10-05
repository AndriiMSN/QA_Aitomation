class GooglePage {
  selector = {
    inputField: ".gLFyf",
    searchButton: ".gNO89b",
    searchResults: "#search",
    resultURL: ".iUh30",
  };

  async fillAndSearch(page) {
    await page.waitForSelector(this.selector.inputField);
    await page.fill(".gLFyf", "Codifun");
    await page.click(this.selector.searchButton);
    // await page.keyboard.press("Enter");
  }
  async getFirstResultURL(page: any) {
    await page.waitForSelector(this.selector.searchResults);
    return await page.$eval(
      this.selector.resultURL,
      (el: any) => el.textContent
    );
  }
}

export default new GooglePage();
