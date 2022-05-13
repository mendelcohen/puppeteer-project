// inserts image property and value into each scrubbedItem object
export default function insertImages( { images, scrubbedItems } ) {
  let imageIndex = 0
  scrubbedItems.forEach(scrubbedItem => {
    scrubbedItem["image"] = images[imageIndex];
    imageIndex++;
  })
  return scrubbedItems;
}