import nc from 'next-connect';
import { deleteUser } from '../../../../controllers/authControllers';
import jsonifyErrors from '../../../../middlewares/error';
import db from '../../../../config/db';
import { checkAuthRoles, checkAuthUser } from '../../../../middlewares/auth';
const handler = nc({ onError: jsonifyErrors });

db();
handler.use(checkAuthUser, checkAuthRoles('ADMIN')).delete(deleteUser);

export default handler;
