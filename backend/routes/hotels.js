import express from 'express';
import Hotel from '../models/Hotel.js';
import { createError } from '../utlis/error.js';

const router = express.Router();


// Creating
router.post('/', async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Updating
router.put('/:id', async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete
router.delete('/:id', async(req,res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("hotel deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})

// Get
router.get('/:id', async(req,res,next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        next(err)
    }
})

// Get All
router.get('/', async(req,res,next) => {
  const failed = true;
  if (failed) return next(createError(401,'not autenticated'))
    try {
        const hotels = await Hotel.findById('faf');
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }
})

export default router;
