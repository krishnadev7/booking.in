import express from 'express';

import { createRoom, deleteRoom, getAllRoom, getRoom, updatedRoomAvailability, updateRoom } from '../controllers/room.js';

import { verifyAdmin } from '../utlis/verifyToken.js';

const router = express.Router();

// Creating
router.post('/:hotelid', verifyAdmin, createRoom);

// Updating
router.put('/:id', verifyAdmin, updateRoom);

router.put('/availability/:id', updatedRoomAvailability)

// Delete
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);

// Get
router.get('/:id', getRoom);

// Get All
router.get('/', getAllRoom);

export default router;

