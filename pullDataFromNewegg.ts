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

  const parentDiv = '#app > div.page-content > section > div > div > div.row-body > div > div > div > div.row-body > div > div.list-wrap > div:nth-child(3) > div'
  let images = await page.$$eval(parentDiv, (imgs: any[]) => {
    imgs = imgs.map(el => el.querySelector('a > img').src)
    return imgs;
  });
  // console.log(images)

  const items = await page.evaluate(() => {
    // gets location of products on page
    const parentDivSelector = '#app > div.page-content > section > div > div > div.row-body > div > div > div > div.row-body > div > div.list-wrap > div:nth-child(3)'
    console.log(parentDivSelector);
    
    const parentDiv = document.querySelector(parentDivSelector);
    // maps through products on page
    const products = Array.from(parentDiv.children).map((childDiv) => {
      
      // singleItemDiv is .children[0].children[0] from parentDiv.
      const singleItemDiv = childDiv.children[0];

      // determines if name is located in regular div or whether it is a product labeled sponsored
      let checkForName = <HTMLElement> singleItemDiv.children[1];
      const name = checkForName.innerText;   
      
      // determines if price is located in regular div or whether it is a product with a special offer
      const checklowestPrice = <HTMLElement> singleItemDiv.children[1].children[0].children[0];
      const lowestPrice = checklowestPrice.innerText;

      let itemNameElement, itemDollarsElement, itemCentsElement;

      // determines where the proper values are for each of these properties
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

      let imageSource = <HTMLElement> singleItemDiv.children[0].children[0];
      console.log(imageSource)
    
      // builds object for each product
      const itemName = itemNameElement.innerText;
      const itemDollars = itemDollarsElement.innerText;
      // removes the decimal point from the price
      const itemCents = itemCentsElement.innerText.replace(/\./g, "");
      return { itemName, itemDollars, itemCents };
    })
    return products;
  })
  await browser.close();
  // console.log(items);
  return { images, items };
}
pullDataFromNewegg()