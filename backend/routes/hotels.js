import express from 'express';
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from '../controllers/hotel.js';
import Hotel from '../models/Hotel.js';
import { createError } from '../utlis/error.js';

const router = express.Router();


// Creating
router.post('/', createHotel);

// Updating
router.put('/:id', updateHotel);

// Delete
router.delete('/:id', deleteHotel)
   

// Get
router.get('/:id',getHotel)

// Get All
router.get('/', getAllHotel)

export default router;
