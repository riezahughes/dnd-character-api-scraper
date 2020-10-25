const puppeteer = require('puppeteer');

// initiating Puppeteer
puppeteer
  .launch()
  .then(async (browser) => {
    // opening a new page and navigating to Reddit
    const page = await browser.newPage();
    await page.goto('https://5e.tools/races.html');
    const text = await page.waitForSelector('ul.races li a');

    // manipulating the page's content
    const grabPosts = await page.evaluate(() => {
      const allPosts = document.body.querySelectorAll('ul.races li a');
      // storing the post items in an array then selecting for retrieving content
      const scrapeItems = [];
      allPosts.forEach((race) => {
        const raceName = race.querySelector('span:nth-child(1)').innerText;
        const abilities = race.querySelector('span:nth-child(2)').innerText;
        const source = race.querySelector('span:nth-child(4)').innerText;
        scrapeItems.push({
          raceName,
          abilities,
          source,
        });
      });
      const races = {
        races: scrapeItems,
      };
      return races;
    });
    // outputting the scraped data
    console.log(grabPosts);
    // closing the browser
    await browser.close();
  })
  // handling any errors
  .catch((err) => {
    console.error(err);
  });
