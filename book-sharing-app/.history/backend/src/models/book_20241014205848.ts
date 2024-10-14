import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  genre: String,
  condition: String,
  imageUrl: String,
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
