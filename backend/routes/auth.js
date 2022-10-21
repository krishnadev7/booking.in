import express from 'express';
import { login, register } from '../controllers/auth.js';

const router = express.Router();

// register Route
router.post('/register', register)

// Login route
router.post('/login',login)

export default router;
