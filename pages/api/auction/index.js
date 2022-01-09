import nc from 'next-connect';
import {
  getAllAuctions,
  addAuction,
} from '../../../controllers/auctionControllers';
import jsonifyErrors from '../../../middlewares/error';
import db from '../../../config/db';

const handler = nc({ onError: jsonifyErrors });

db();
handler.get(getAllAuctions);
handler.post(addAuction);

export default handler;
