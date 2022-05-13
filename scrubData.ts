import { scrubbedHardDrive } from './index';

export type hardDrive = {
  itemName: string,
  itemDollars: string,
  itemCents: string,
  image: string
}

export default function scrubData( products: Array<hardDrive> ) {
  const scrubbedItems: Array<scrubbedHardDrive> = products.map((product: hardDrive) => {
    let scrubbedDollars = (parseInt(product.itemDollars) * 100);
    let scrubbedCents  = parseInt(product.itemCents);
    const digits = /^\d+$/;
    digits.test(product.itemDollars) === true ? scrubbedDollars : scrubbedDollars = 0;
    digits.test(product.itemCents) === true ? scrubbedCents : scrubbedCents = 0;
    const price = scrubbedDollars + scrubbedCents;
    return {
      itemName: product.itemName,
      price,
      image: product.image
    }
  });
  return scrubbedItems;
}