import pullDataFromNewegg from "./pullDataFromNewegg";
// import { AppDataSource } from "./src/data-source";
// import { HardDrive } from "./src/entity/HardDrive";
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
  // AppDataSource.destroy();
  // await AppDataSource.initialize()
  // const sendDataToDB = scrubbedItems.map(async item => {
  //   const hardDrive: any = new HardDrive();
  //   hardDrive.itemName = item.itemName
  //   hardDrive.price = item.price
    
  //   await AppDataSource.manager.save(hardDrive)
  //   return sendDataToDB;
  // })
  
}

main();