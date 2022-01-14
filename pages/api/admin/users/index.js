import nc from 'next-connect';
import { getAllUsers } from '../../../../controllers/authControllers';
import jsonifyErrors from '../../../../middlewares/error';
import db from '../../../../config/db';
import { checkAuthRoles, checkAuthUser } from '../../../../middlewares/auth';
const handler = nc({ onError: jsonifyErrors });

db();
// user types exports three roles and admin is at the beginning of that array
handler.get(getAllUsers);

export default handler;
