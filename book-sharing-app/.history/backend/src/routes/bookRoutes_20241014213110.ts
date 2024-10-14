import express from 'express';
import Book from '../models/book';

const router = express.Router();

// GET all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err: unknown) {  // 'err' is of type unknown
    if (err instanceof Error) {
      res.status(500).json({ message: err.message }); // Now you can access err.message
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
});

// POST a new book
router.post('/', async (req, res) => {
  const book = new Book(req.body);
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err: unknown) {  // 'err' is of type unknown
    if (err instanceof Error) {
      res.status(400).json({ message: err.message }); // Now you can access err.message
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
});

export default router;
