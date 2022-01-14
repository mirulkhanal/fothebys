import nc from 'next-connect';
import { getAuthUser } from '../../controllers/authControllers';
import jsonifyErrors from '../../middlewares/error';
import { checkAuthUser } from '../../middlewares/auth';
import db from '../../config/db';

db();
const handler = nc({ onError: jsonifyErrors });
handler.use(checkAuthUser).get(getAuthUser);

export default handler;
