const puppeteer = require('puppeteer');

// initiating Puppeteer
puppeteer
  .launch()
  .then(async (browser) => {
    // opening a new page and navigating to Reddit
    const page = await browser.newPage();
    await page.goto('https://5e.tools/races.html#aarakocra_eepc/');
    await page.waitForSelector('body');

    // manipulating the page's content
    const grabPosts = await page.evaluate(() => {
      const allPosts = document.body.querySelectorAll('.Races li');

      // storing the post items in an array then selecting for retrieving content
      scrapeItems = [];
      allPosts.forEach((race) => {
        const postTitle = item.querySelector('h3').innerText;
        let postDescription = '';
        try {
          postDescription = item.querySelector('p').innerText;
        } catch (err) {}
        scrapeItems.push({
          postTitle,
          postDescription,
        });
      });
      const items = {
        redditPosts: scrapeItems,
      };
      return items;
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
