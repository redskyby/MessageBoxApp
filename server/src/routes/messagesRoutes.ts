import { Router } from 'express';

import messagesMiddleware from '../middleWare/messagesMiddleware';
import messageController from '../controllers/messageController';

const router = Router();

router.post('/add', ...messagesMiddleware, messageController.addMessage);
router.get('/read', messageController.readMessages);

export default router;
