import scrubData, { hardDrive } from './scrubData';
import { scrubbedHardDrive } from './index';

describe('This describes the group of tests.', () => {
  it('multiplies dollars by 100 and adds cents to the product of dollars in a simple case', () => {
    const items: Array<hardDrive> = [{
      itemName: 'asd',
      itemDollars: '999',
      itemCents: '99',
      image: "abc.jpeg",
      isSponsored: true
    },
    {
      itemName: 'asd',
      itemDollars: '999',
      itemCents: '99',
      image: "def.jpeg",
      isSponsored: false
    }]
    const scrubbedData: Array<scrubbedHardDrive> = [{
      itemName: 'asd',
      price: 99999,
      image: "abc.jpeg",
      isSponsored: true
    },
    {
      itemName: 'asd',
      price: 99999,
      image: "def.jpeg",
      isSponsored: false
    }]
    expect(scrubData(items)).toEqual(scrubbedData);
  });
  it ('multiplies dollars by 100 and adds cents to the product of dollars in common cases', () => {
    const items: Array<hardDrive> = [{
      itemName: 'asd',
      itemDollars: '79',
      itemCents: '99',
      image: "ghi.jpeg",
      isSponsored: true
    },
    {
      itemName: 'asd',
      itemDollars: '229',
      itemCents: '89',
      image: 'jkl.jpeg',
      isSponsored: true
    }]
    const scrubbedData: Array<scrubbedHardDrive> = [{
      itemName: 'asd',
      price: 7999,
      image: "ghi.jpeg",
      isSponsored: true
    },
    {
      itemName: 'asd',
      price: 22989,
      image: 'jkl.jpeg',
      isSponsored: true
    }]
    expect(scrubData(items)).toEqual(scrubbedData);
  });
  it ('multiplies dollars by 100 and adds cents to the product of dollars in edge cases', () => {
    const items: Array<hardDrive> = [{
      itemName: 'asd',
      itemDollars: '999',
      itemCents: '',
      image: 'mno.jpeg',
      isSponsored: false
    },
    {
      itemName: 'asd',
      itemDollars: '100',
      itemCents: 'g9',
      image: 'pqr.jpeg',
      isSponsored: false
    },
    {
      itemName: 'asd',
      itemDollars: '90',
      itemCents: '9',
      image: 'stu.jpeg',
      isSponsored: false
    }]
    const scrubbedData: Array<scrubbedHardDrive> = [{
      itemName: 'asd',
      price: 0,
      image: 'mno.jpeg',
      isSponsored: false
    },
    {
      itemName: 'asd',
      price: 0,
      image: 'pqr.jpeg',
      isSponsored: false
    },
    {
      itemName: 'asd',
      price: 9009,
      image: 'stu.jpeg',
      isSponsored: false
    }]
    expect(scrubData(items)).toEqual(scrubbedData);
  });
})