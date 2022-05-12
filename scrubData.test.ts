import scrubData, { hardDrive } from './scrubData';
import { scrubbedHardDrive } from './index';

describe('This describes the group of tests.', () => {
  it('multiplies dollars by 100 and adds cents to the product of dollars in a simole case', () => {
    const items: Array<hardDrive> = [{
      itemName: 'asd',
      itemDollars: '999',
      itemCents: '99',
    },
    {
      itemName: 'asd',
      itemDollars: '999',
      itemCents: '99',
    }]
    const scrubbedData: Array<scrubbedHardDrive> = [{
      itemName: 'asd',
      price: 99999,
    },
    {
      itemName: 'asd',
      price: 99999,
    }]
    expect(scrubData(items)).toEqual(scrubbedData);
  });
  it ('multiplies dollars by 100 and adds cents to the product of dollars in common cases', () => {
    const items: Array<hardDrive> = [{
      itemName: 'asd',
      itemDollars: '79',
      itemCents: '99',
    },
    {
      itemName: 'asd',
      itemDollars: '229',
      itemCents: '89',
    }]
    const scrubbedData: Array<scrubbedHardDrive> = [{
      itemName: 'asd',
      price: 7999,
    },
    {
      itemName: 'asd',
      price: 22989,
    }]
    expect(scrubData(items)).toEqual(scrubbedData);
  });
  it ('multiplies dollars by 100 and adds cents to the product of dollars in edge cases', () => {
    const items: Array<hardDrive> = [{
      itemName: 'asd',
      itemDollars: '999',
      itemCents: 'u',
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
    }]
    const scrubbedData: Array<scrubbedHardDrive> = [{
      itemName: 'asd',
      price: 99900,
    },
    {
      itemName: 'asd',
      price: 10000,
    },
    {
      itemName: 'asd',
      price: 9009,
    }]
    expect(scrubData(items)).toEqual(scrubbedData);
  });
})