import { scrubbedHardDrive } from './index';

export type hardDrive = {
  itemName: string,
  itemDollars: string,
  itemCents: string,
}

export default function scrubData( items: hardDrive[] ) {
  const scrubbedItems: Array<scrubbedHardDrive> = items.map((item: hardDrive) => {
    const scrubbedDollars = (parseInt(item.itemDollars) * 100);
    const scrubbedCents = parseInt(item.itemCents);
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
    itemDollars: '100',
    itemCents: '00',
  },
  {
    itemName: 'asd',
    itemDollars: '90',
    itemCents: '9',
  }
]));
