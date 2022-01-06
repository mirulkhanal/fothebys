import nc from 'next-connect';
import { getAllArts } from '../../../controllers/artController';

const handler = nc();

handler.get(getAllArts);

export default handler;
