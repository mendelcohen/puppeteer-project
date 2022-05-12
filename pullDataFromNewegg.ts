import * as puppeteer from 'puppeteer';

export default async function pullDataFromNewegg() {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://newegg.com/p/pl?d=hard+drive', {
    waitUntil: 'networkidle2',
    timeout: 0
  });

  
  const items = await page.evaluate(() => {
    const parentDivSelector = '#app > div.page-content > section > div > div > div.row-body > div > div > div > div.row-body > div > div.list-wrap > div:nth-child(3)'
    console.log(parentDivSelector);
    // singleItemDiv is .children[0].children[0] from parentDiv.
    const parentDiv = document.querySelector(parentDivSelector);
  
    const products = Array.from(parentDiv.children).map((childDiv) => {
      console.log(childDiv);
      const singleItemDiv = childDiv.children[0];

      let checkForName = <HTMLElement> singleItemDiv.children[1];
      const name = checkForName.innerText;   

      const checklowestPrice = <HTMLElement> singleItemDiv.children[1].children[0].children[0];
      const lowestPrice = checklowestPrice.innerText;

      let itemNameElement, itemDollarsElement, itemCentsElement;

      if (name === ' Sponsored' && lowestPrice === 'LOWEST PRICEin 30 days') {
        itemNameElement = <HTMLElement> singleItemDiv.children[2].children[2];
        itemDollarsElement = <HTMLElement> singleItemDiv.children[3].children[0].children[2].children[1]
        itemCentsElement = <HTMLElement> singleItemDiv.children[3].children[0].children[2].children[2]
      } else if (name === ' Sponsored') {
        itemNameElement = <HTMLElement> singleItemDiv.children[2].children[1];
        itemDollarsElement = <HTMLElement> singleItemDiv.children[3].children[0].children[2].children[1]
        itemCentsElement = <HTMLElement> singleItemDiv.children[3].children[0].children[2].children[2]
      } else if (lowestPrice === 'LOWEST PRICE') {
        itemNameElement = <HTMLElement> singleItemDiv.children[1].children[2];
        itemDollarsElement = <HTMLElement> singleItemDiv.children[2].children[0].children[2].children[1]
        itemCentsElement = <HTMLElement> singleItemDiv.children[2].children[0].children[2].children[2]
      } else {
        itemNameElement = <HTMLElement> singleItemDiv.children[1].children[1];
        itemDollarsElement = <HTMLElement> singleItemDiv.children[2].children[0].children[2].children[1]
        itemCentsElement = <HTMLElement> singleItemDiv.children[2].children[0].children[2].children[2]
      }

      
      
      const itemName = itemNameElement.innerText;
      const itemDollars = itemDollarsElement.innerText;
      const itemCents = itemCentsElement.innerText.replace(/\./g, "");
      return { itemName, itemDollars, itemCents };
    })
    return products;
  })
  await browser.close();

  return items;
}
// pullDataFromNewegg()