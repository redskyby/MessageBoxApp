import { Router } from 'express';

import messageController from '../controllers/messageController';
import messagesMiddleware from '../middleWare/messagesMiddleware';

const router = Router();

router.post('/add', ...messagesMiddleware, messageController.addMessage);
router.get('/read', messageController.readMessages);

export default router;
