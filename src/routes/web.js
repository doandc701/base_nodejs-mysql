import express from 'express';
import { getHomePage } from '../controllers/homeController.js';
const router = express.Router();

router.get('/', getHomePage);

export default router; // Export the router object to be used in src/server.js
