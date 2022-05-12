import { scrubbedHardDrive } from './index';

export type hardDrive = {
  itemName: string,
  itemDollars: string,
  itemCents: string,
}

export default function scrubData( items: hardDrive[] ) {
  const scrubbedItems: Array<scrubbedHardDrive> = items.map((item: hardDrive) => {
    let scrubbedDollars = (parseInt(item.itemDollars) * 100);
    let scrubbedCents  = parseInt(item.itemCents);
    const digits = /^\d+$/;
    digits.test(item.itemDollars) === true ? scrubbedDollars : scrubbedDollars = 0;
    digits.test(item.itemCents) === true ? scrubbedCents : scrubbedCents = 0;
    const price = scrubbedDollars + scrubbedCents;
    return {
      itemName: item.itemName,
      price
    }
  });
  return scrubbedItems;
}