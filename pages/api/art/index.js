import nc from 'next-connect';
import db from '../../../config/db';
import { getAllArts, addArt } from '../../../controllers/artController';
import jsonifyErrors from '../../../middlewares/error';
const handler = nc({ onError: jsonifyErrors });
db();

handler.get(getAllArts);
handler.post(addArt);

export default handler;
