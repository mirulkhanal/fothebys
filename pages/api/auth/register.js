import nc from 'next-connect';
import { registerUser } from '../../../controllers/authControllers';
import jsonifyErrors from '../../../middlewares/error';
import db from '../../../config/db';

db();
const handler = nc({ onError: jsonifyErrors });
handler.post(registerUser);

export default handler;
