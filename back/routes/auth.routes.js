import {Router} from 'express';
import { register_r, register_u, login_u, login_r } from '../controllers/auth.controller.js';

const router = Router();

router.post('/register_u', register_u);
router.post('/login_u', login_u);

router.post('/register_r', register_r);
router.post('/login_r', login_r);

export default router