import pullDataFromNewegg from "./pullDataFromNewegg";
import scrubData from "./scrubData";
import sendDataToDB from "./sendDataToDB";

export type scrubbedHardDrive = {
  itemName: string,
  price: number
}

async function main() {
  const items = await pullDataFromNewegg();
  const scrubbedItems: Array<scrubbedHardDrive> = await scrubData( items );
  console.log(scrubbedItems);
  await sendDataToDB( {scrubbedItems} );  
}

main();