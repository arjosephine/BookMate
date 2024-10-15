import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  available: { type: Boolean, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  genre: String,
  condition: String,
  imageUrl: String,
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
