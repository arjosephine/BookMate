import express from 'express';
import { getBooks, createBook, updateBookAvailability } from '../controllers/bookController';

const router = express.Router();

// GET all books
router.get('/', getBooks);

// POST a new book
router.post('/', createBook);

// PUT to update a book's availability
router.put('/:id', updateBookAvailability);

export default router;
