const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.pdf({
    path: 'src/assets/puppeteer-test.pdf',
    printBackground: true,
    width: '209.55mm',
    height: '298.45mm',

  });
  await browser.close();
})();
