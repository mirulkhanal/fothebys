import nc from 'next-connect';
import {
  getAllAuctions,
  addAuction,
  removeAuctionById,
} from '../../../controllers/auctionControllers';
import jsonifyErrors from '../../../middlewares/error';
import db from '../../../config/db';
import { checkAuthUser, checkAuthRoles } from '../../../middlewares/auth';

const handler = nc({ onError: jsonifyErrors });

db();
handler.get(getAllAuctions);
handler.use(checkAuthUser, checkAuthRoles('ADMIN')).post(addAuction);

export default handler;
