import nc from 'next-connect';
import db from '../../../../../config/db';
import { getArtsByAuctionId } from '../../../../../controllers/auctionControllers';
import jsonifyErrors from '../../../../../middlewares/error';

const handler = nc({ onError: jsonifyErrors });
db();
handler.get(getArtsByAuctionId);

export default handler;
