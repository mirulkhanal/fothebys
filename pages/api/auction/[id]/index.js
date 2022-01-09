import nc from 'next-connect';
import db from '../../../../config/db';
import {
  getAuctionById,
  updateAuctionById,
} from '../../../../controllers/auctionControllers';
import jsonifyErrors from '../../../../middlewares/error';

const handler = nc({ onError: jsonifyErrors });
db();

handler.get(getAuctionById);
handler.put(updateAuctionById);
// handler.delete(removeArtById);

export default handler;
