import express from 'express';
import { getHomePage, getCreateUserPage, getUpdateUserPage, postCreateUser, putUpdateUser, deleteUser } from '../controllers/homeController.js';
const router = express.Router();

router.get('/', getHomePage);
router.get('/create', getCreateUserPage);
router.get('/update/:userId', getUpdateUserPage);

router.post('/create-user', postCreateUser);
router.put('/update-user/:userId', putUpdateUser);
router.delete('/delete-user/:userId', deleteUser);
export default router; // Export the router object to be used in src/server.js
