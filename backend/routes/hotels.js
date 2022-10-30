import express from 'express';
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getHotel, getHotelRooms, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utlis/verifyToken.js';

const router = express.Router();


// Creating
router.post('/',verifyAdmin,createHotel);

// Updating
router.put('/:id',verifyAdmin, updateHotel);

// Delete
router.delete('/:id',verifyAdmin, deleteHotel)
   

// Get
router.get('/find/:id', getHotel);

// Get All
router.get('/', getAllHotel)

// Get hotel by citynames
router.get('/countByCity',countByCity)

// Get hotel by hotelType
router.get('/countByType',countByType)

//Get hotelRooms
router.get('/room/:id',getHotelRooms)

export default router;
