import nc from 'next-connect';
import db from '../../../../config/db';
import {
  getAuctionById,
  removeAuctionById,
  updateAuctionById,
} from '../../../../controllers/auctionControllers';
import jsonifyErrors from '../../../../middlewares/error';
import { checkAuthRoles, checkAuthUser } from '../../../../middlewares/auth';
const handler = nc({ onError: jsonifyErrors });
db();

handler.get(getAuctionById);
handler.use(checkAuthUser, checkAuthRoles('ADMIN')).put(updateAuctionById);
handler.use(checkAuthUser, checkAuthRoles('ADMIN')).delete(removeAuctionById);

export default handler;
