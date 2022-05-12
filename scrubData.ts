import { scrubbedHardDrive } from './index';

export type hardDrive = {
  itemName: string,
  itemDollars: string,
  itemCents: string,
}

export default function scrubData( items: hardDrive[] ) {
  const scrubbedItems: Array<scrubbedHardDrive> = items.map((item: hardDrive) => {
    let scrubbedDollars = (parseInt(item.itemDollars) * 100);
    /^\d+$/.test(item.itemDollars) === true ? scrubbedDollars : scrubbedDollars = 0;
    let scrubbedCents  = parseInt(item.itemCents);
    /^\d+$/.test(item.itemCents) === true ? scrubbedCents : scrubbedCents = 0;
    let price = scrubbedDollars + scrubbedCents;
    return {
      itemName: item.itemName,
      price
    }
  });
  return scrubbedItems;
}


console.log(
  scrubData([
  {
    itemName: 'asd',
    itemDollars: '999',
    itemCents: '',
  },
  {
    itemName: 'asd',
    itemDollars: 'jj',
    itemCents: '08',
  },
  {
    itemName: 'asd',
    itemDollars: '90',
    itemCents: '9',
  }
]));
