import express from 'express';
import { deleteUsers, getAllUsers, getUser, updateUsers } from '../controllers/users.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utlis/verifyToken.js';


const router = express.Router();

// router.get('/checkauthentication', verifyToken,(req,res,next) => {
//     res.send("hi user ,You are logged in");
// })

// router.get('/checkuser/:id', verifyUser,(req,res,next) => {
//     res.send("hello user, you are logged in and you can delete your account")
// })

// router.get('/checkAdmin/:id', verifyAdmin,(req,res,next) => {
//     res.send("hello admin, you are logged in and you can delete all accounts")
// })

// Updating
router.put('/:id',verifyUser, updateUsers);

// Delete
router.delete('/:id',verifyUser, deleteUsers);

// Get
router.get('/:id',verifyUser, getUser);

// Get All
router.get('/',verifyAdmin, getAllUsers);

export default router;
