import nc from 'next-connect';
import db from '../../../../config/db';
import {
  getAdminArts,
  removeArtById,
  updateArtById,
} from '../../../../controllers/artController';
import jsonifyErrors from '../../../../middlewares/error';
import { checkAuthUser, checkAuthRoles } from '../../../../middlewares/auth';
const handler = nc({ onError: jsonifyErrors });
db();
handler.use(checkAuthUser, checkAuthRoles('ADMIN')).put(updateArtById);
handler.use(checkAuthUser, checkAuthRoles('ADMIN')).delete(removeArtById);

export default handler;
