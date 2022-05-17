import { AppDataSource } from "./src/data-source"
import { HardDrive } from "./src/entity/HardDrive"
import type { scrubbedHardDrive } from "./index";

export default async function sendDataToDB({ scrubbedItems }) {
  await AppDataSource.initialize()
  const dbData: Array<scrubbedHardDrive> = scrubbedItems.map(item => {
    const drive: any = new HardDrive();
    drive.itemName = item.itemName
    drive.price = item.price
    drive.image = item.image
    drive.isSponsored = item.isSponsored
    return drive;
  })
  await AppDataSource.manager.save(dbData)
  console.log("Saved new hard drives");
  await AppDataSource.destroy();
  return;
}
