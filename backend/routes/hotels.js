import express from 'express';
import { countByCity, createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from '../controllers/hotel.js';
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
router.get('/countByCity',countByCity)
router.get('countByType',getAllHotel)

export default router;
