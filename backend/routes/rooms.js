import express from 'express';

import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from '../controllers/room.js';

import { verifyAdmin } from '../utlis/verifyToken.js';

const router = express.Router();

// Creating
router.post('/:hotelid', verifyAdmin, createRoom);

// Updating
router.put('/:id', verifyAdmin, updateRoom);

// Delete
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);

// Get
router.get('/:id', getRoom);

// Get All
router.get('/', getAllRoom);

export default router;

