import express from 'express';
import { getBooks, createBook, updateBookAvailability } from '../controllers/bookController';

const router = express.Router();

// GET request for all books
router.get('/books', getBooks);

// POST request to create a new book
router.post('/books', createBook);

// PUT request to update book availability
router.put('/books/:id', updateBookAvailability);

export default router;
