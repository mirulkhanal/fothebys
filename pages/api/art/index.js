import nc from 'next-connect';
import db from '../../../config/db';
import { getAllArts, addArt } from '../../../controllers/artController';
import { checkAuthRoles, checkAuthUser } from '../../../middlewares/auth';
import jsonifyErrors from '../../../middlewares/error';
const handler = nc({ onError: jsonifyErrors });
db();

handler.get(getAllArts);

export default handler;
