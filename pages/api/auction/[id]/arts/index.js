import nc from 'next-connect';
import db from '../../../../../config/db';
import {
  getArtsByAuctionId,
  removeArtsFromAuction,
} from '../../../../../controllers/auctionControllers';
import jsonifyErrors from '../../../../../middlewares/error';

const handler = nc({ onError: jsonifyErrors });
db();
handler.get(getArtsByAuctionId);
handler.put(removeArtsFromAuction);

export default handler;
