import { getEndedAuctions } from "../lib";

async function processAuctions(event, context) {
  const auctionsToClose = await getEndedAuctions();
  console.log(auctionsToClose);
  // console.log("processing auctions!");
}

export const handler = processAuctions;
