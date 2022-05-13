import pullDataFromNewegg from "./pullDataFromNewegg";
import scrubData, { hardDrive } from "./scrubData";
import sendDataToDB from "./sendDataToDB";
// import insertImages from "./insertImages";

export type scrubbedHardDrive = {
  itemName: string,
  price: number
  image: string
}

async function main() {
  // imports products with 3 properties
  const products: Array<hardDrive> = await pullDataFromNewegg();
  // const items = products.items;
  // const images = products.images;
  // combines 2 properties into price
  let scrubbedItems: Array<scrubbedHardDrive> = await scrubData( products );
  // inserts image property and value into each scrubbedItem object
  // scrubbedItems = await insertImages( { scrubbedItems, images } );
  console.log(scrubbedItems);
  await sendDataToDB( { scrubbedItems } );  
}

main();