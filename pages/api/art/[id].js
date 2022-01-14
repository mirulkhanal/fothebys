import nc from 'next-connect';
import db from '../../../config/db';
import { getArtById } from '../../../controllers/artController';
import jsonifyErrors from '../../../middlewares/error';
const handler = nc({ onError: jsonifyErrors });
db();
handler.get(getArtById);

export default handler;
