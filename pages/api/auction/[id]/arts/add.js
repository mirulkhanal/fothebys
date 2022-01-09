import nc from 'next-connect';
import db from '../../../../../config/db';
import { addArtsToAuction } from '../../../../../controllers/auctionControllers';
import jsonifyErrors from '../../../../../middlewares/error';

const handler = nc({ onError: jsonifyErrors });
db();
handler.post(addArtsToAuction);

export default handler;
