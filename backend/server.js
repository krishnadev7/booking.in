import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import hotelRoute from './routes/hotels.js';
import roomRoute from './routes/rooms.js';
import userRoute from './routes/users.js';

const app = express();
const PORT = 8800;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('connected to mongodb');
  } catch (error) {
    throw error;
  }
};

app.use(express.json())

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/hotels', hotelRoute);
app.use('/api/rooms', roomRoute);

app.listen(PORT, () => {
  connect();
  console.log(`server running on http://localhost:${PORT}`);
});

//
