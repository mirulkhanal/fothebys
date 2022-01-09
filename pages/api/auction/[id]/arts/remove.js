import nc from 'next-connect';
import db from '../../../../../config/db';
import { removeArtsFromAuction } from '../../../../../controllers/auctionControllers';
import jsonifyErrors from '../../../../../middlewares/error';

const handler = nc({ onError: jsonifyErrors });
db();
handler.delete(removeArtsFromAuction);

export default handler;
