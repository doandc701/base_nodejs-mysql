import express from 'express';
import { getHomePage, createUser } from '../controllers/homeController.js';
const router = express.Router();

router.get('/', getHomePage);

router.post('/create-user', createUser);
export default router; // Export the router object to be used in src/server.js
