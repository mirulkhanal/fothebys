import nc from 'next-connect';
import db from '../../../config/db';
import {
  getArtById,
  removeArtById,
  updateArtById,
} from '../../../controllers/artController';
import jsonifyErrors from '../../../middlewares/error';

const handler = nc({ onError: jsonifyErrors });
db();

handler.get(getArtById);
handler.put(updateArtById);
handler.delete(removeArtById);

export default handler;
