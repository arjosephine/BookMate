import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes'; // Ensure this path is correct
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define the /api/books route
app.use('/api/books', bookRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(cors());
