import nc from 'next-connect';
import jsonifyErrors from '../../../../middlewares/error';
import db from '../../../../config/db';
import { checkAuthRoles, checkAuthUser } from '../../../../middlewares/auth';
import {
  getAdminArts,
  addArt,
} from '../../../../controllers/artController';
const handler = nc({ onError: jsonifyErrors });

db();
// user types exports three roles and admin is at the beginning of that array
handler.use(checkAuthUser, checkAuthRoles('ADMIN')).get(getAdminArts);
handler.use(checkAuthUser, checkAuthRoles('ADMIN')).post(addArt);

export default handler;
