import { scrubbedHardDrive } from './index';

export type hardDrive = {
  itemName: string,
  itemDollars: string,
  itemCents: string,
  image: string,
  isSponsored: boolean
}

export default function scrubData( products: Array<hardDrive> ) {
  const scrubbedItems: Array<scrubbedHardDrive> = products.map((product: hardDrive) => {
    let scrubbedDollars = (parseInt(product.itemDollars) * 100);
    let scrubbedCents  = parseInt(product.itemCents);
    let price = scrubbedDollars + scrubbedCents;
    const digits = /^\d+$/;
    digits.test(product.itemDollars) === true ? scrubbedDollars : price = 0;
    digits.test(product.itemCents) === true ? scrubbedCents : price = 0;
    
    return {
      itemName: product.itemName,
      price,
      image: product.image,
      isSponsored: product.isSponsored
    }
  });
  return scrubbedItems;
}