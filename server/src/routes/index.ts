import { Router } from 'express';

import messagesRoutes from './messagesRoutes';
const router = Router();

//rest api
router.use('/messages', messagesRoutes);

export default router;
