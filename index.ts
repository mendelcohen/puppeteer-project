import pullDataFromNewegg from "./pullDataFromNewegg";
import scrubData from "./scrubData";
import sendDataToDB from "./sendDataToDB";

export type scrubbedHardDrive = {
  itemName: string,
  price: number
}

async function main() {
  const products = await pullDataFromNewegg();
  const items = products.items;
  const images = products.images;
  const scrubbedItems: Array<scrubbedHardDrive> = await scrubData( items );
  console.log(scrubbedItems);
  await sendDataToDB( {scrubbedItems} );  
}

main();